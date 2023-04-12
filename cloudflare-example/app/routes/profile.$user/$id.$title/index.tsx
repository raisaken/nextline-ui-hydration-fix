import {
  Typography,
  Box,
  Stack,
  Button,
  Chip,
  Modal,
  Tooltip,
} from '@mui/material';
import { ActionArgs, ActionFunction, LoaderArgs } from '@remix-run/cloudflare';
import {
  useLoaderData,
  useParams,
  Link,
  CatchBoundaryComponent,
  useMatches,
  useRouteLoaderData,
  useNavigate,
  Form,
} from '@remix-run/react';
import fetcher from '~/utils/fetcher';
import urls from '~/api/endpoint';
import { Unslugify } from '~/src/config/slugify';
import GroupedAvatar from '~/src/components/grouped-avatar';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { theme } from '~/styles/theme';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const res = await fetcher(
    request,
    urls.content.get_content_by_id.replace(':id', params.id),
    'GET'
  );
  if (!res) {
    throw new Response('User not Found, id title index', { status: 404 });
  }
  return res;
};

export const action: ActionFunction = async ({
  request,
  params,
}: ActionArgs) => {
  const form = await request.formData();

  const { _action } = Object.fromEntries(form);

  let body;

  if (_action === 'publish') {
    body = JSON.stringify({
      leafStatus: 'Published',
    });
  } else if (_action === 'release') {
    body = JSON.stringify({
      leafStatus: 'Released',
    });
  }

  fetcher(
    request,
    urls.content.get_content_by_id.replace(':id', params.id),
    'PATCH',
    body
  );
  return null;
};
export const CatchBoundary: CatchBoundaryComponent = ({ error }) => {
  return <>{error}, Error on id title index</>;
};

export default function index() {
  const navigate = useNavigate();
  const matches = useMatches();
  const param = useParams();
  const data = useLoaderData<typeof loader>();
  const [open, setOpen] = useState(false);
  const userDetail = useRouteLoaderData('root');
  const loggedInUser = userDetail?.username;
  const isLoggedInUser = loggedInUser === param?.user ? true : false;
  const { leafStatus, lines } = data;
  const lineArray = Object.values(lines[0]);

  const chips = [
    {
      label: 'Edit',
      route: `edit`,
      disabled: leafStatus === 'Released' || leafStatus === 'Published',
      handleChipClick: function () {
        if (leafStatus === null || leafStatus === 'Draft') {
          navigate('edit');
        }
      },
    },
    {
      label: 'Edit Details',
      route: 'details',
      handleChipClick: function () {
        if (matches[3].id === 'routes/profile.$user/$id.$title/edit') {
          setOpen(true);
        } else {
          navigate('form-details');
        }
      },
    },
  ];
  const handleClose = () => setOpen(false);

  const getAvatars = (num: number = 4) => {
    return [...Array(num)].map((v: number) => {
      return {
        src: faker.image.avatar(),
        alt: faker.name.fullName(),
      };
    });
  };

  const buttons = [
    { name: `Save Changes` },
    { name: `Don't Save` },
    { name: `Cancel` },
  ];
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      justifyContent="space-between"
      style={{ height: `calc(100vh - 60px)` }}
    >
      <Box p={1}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column" sx={{ pb: 5 }}>
            {matches[3].id !== 'routes/profile.$user/$id.$title/index' ? (
              <input
                type="text"
                defaultValue={Unslugify(param.title)}
                name="contentTitle"
                onFocus={(e) => e.target.select()}
                className="content-title-input"
              />
            ) : (
              <Typography className="content-title">
                {Unslugify(param.title)}
              </Typography>
            )}

            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                lineHeight: '13px',
              }}
            >
              2022-05-05
            </Typography>
          </Box>
          <Box display="flex">
            <GroupedAvatar total={5} images={getAvatars(20)} />
            {isLoggedInUser && (
              <Stack direction="row" spacing={1} sx={{ pl: 1 }}>
                {chips.map((chip, idx) => (
                  <Chip
                    key={idx}
                    label={chip.label}
                    size="small"
                    onClick={(e) => chip.handleChipClick(e)}
                    disabled={chip?.disabled}
                    sx={{
                      cursor: 'pointer',
                      fontSize: '10px',
                      fontWeight: '400',
                      lineHeight: '13px',
                    }}
                  />
                ))}
                {leafStatus !== 'Released' && (
                  <Form method="post">
                    <Button
                      variant="contained"
                      className="chip-button"
                      type="submit"
                      name="_action"
                      value={
                        leafStatus === null || leafStatus === 'Draft'
                          ? 'publish'
                          : 'release'
                      }
                    >
                      {leafStatus === null || leafStatus === 'Draft'
                        ? 'Publish'
                        : 'Release'}
                    </Button>
                  </Form>
                )}
              </Stack>
            )}
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                component="h2"
                sx={{
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '22px',
                  mb: 3,
                }}
              >
                Do you want to save the changes to Photograph ?
              </Typography>
              <Box display="flex" justifyContent="end">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    className="outlined__button"
                    sx={{
                      color: theme.palette?.primary.main,
                      borderColor: theme.palette?.primary.main,
                      ml: 1,
                      fontWeight: '700',
                      fontSize: '14px',
                      lineHeight: '17px',
                    }}
                    variant="outlined"
                    onClick={() => setOpen(false)}
                  >
                    {button.name}
                  </Button>
                ))}
              </Box>
            </Box>
          </Modal>
        </Box>
        {lineArray.map(
          (item, index) =>
            item[0].isSelected === true && (
              <Stack key={index} direction={'row'} spacing={1.5}>
                <Typography
                  style={{
                    fontWeight: '700',
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: 'red',
                  }}
                >
                  {index + 1}
                </Typography>
                <Typography
                  style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '18px',
                  }}
                >
                  {item[0].lineData}
                </Typography>
              </Stack>
            )
        )}
      </Box>
      {data.leafStatus === 'Published' && loggedInUser && (
        <Box display="flex" justifyContent="flex-end" p={0.5}>
          <Link to={'/contribution/' + param.id + '/' + param.title}>
            <Button size="small" variant="contained">
              Contribute
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
