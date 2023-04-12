import { Box, Button, Chip, Modal, Stack, Typography } from '@mui/material';
import { ActionArgs, ActionFunction, LoaderArgs, redirect } from '@remix-run/cloudflare';
import {
  Form,
  useLoaderData,
  useMatches,
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from '@remix-run/react';
import { useState } from 'react';
import urls from '~/api/endpoint';
import ComboButton from '~/src/components/button/combo-button';
import { DraftEditor } from '~/src/components/draft-editor';
import fetcher from '~/utils/fetcher';
import { getFromStorage } from '~/src/config/local-storage';
import GroupedAvatar from '~/src/components/grouped-avatar';
import { Unslugify } from '~/src/config/slugify';
import { faker } from '@faker-js/faker';
import { theme } from '~/styles/theme';
import { toast } from 'react-toastify';

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

const buttonStyle = {
  color: theme.palette?.primary.main,
  borderColor: theme.palette?.primary.main,
  ml: 1,
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '17px',
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const res = await fetcher(
    request,
    urls.content.get_content_by_id.replace(':id', params.id),
    'GET'
  );
  return res;
};

export const action: ActionFunction = async ({
  request,
  params,
}: ActionArgs) => {
  const form = await request.formData();
  const { _action } = Object.fromEntries(form);
  if (_action === 'post_details') {
    const contentTitle = form.get('contentTitle');
    let lines = JSON.parse(form.get('lines'));
    const prevLines = JSON.parse(form.get('prevLines'));
    const userId = form.get('userId');
    const body = JSON.stringify({
      contentTitle,
    });
    fetcher(
      request,
      urls.content.get_content_by_id.replace(':id', params.id),
      'PATCH',
      body
    );
    lines?.blocks?.map((item, index) => {
      if (index < prevLines.length) {
        const body = JSON.stringify({
          lineData: item.text,
          creatorId: userId,
          lineNumber: index + 1,
          contentId: params.id,
          isSelected: true,
        });
        const endpoint = urls.line.leaf_line_id.replace(
          ':id',
          prevLines[index][0].id
        );
        const res = fetcher(request, endpoint, 'PUT', body);
      } else {
        const body = JSON.stringify({
          lineData: item.text,
          creatorId: userId,
          lineNumber: index + 1,
          contentId: params.id,
          isSelected: true,
        });
        const res = fetcher(request, urls.line.leaf_line, 'POST', body);
      }
    });
    return redirect(`/profile/${params.user}/${params.id}/${contentTitle}`);
  } else {
    const body = JSON.stringify({
      leafStatus: 'Published',
    });
    fetcher(
      request,
      urls.content.get_content_by_id.replace(':id', params.id),
      'PATCH',
      body
    );
  }
  return null;
};

function edit() {
  //need to delete remove handle from backend

  const navigate = useNavigate();

  const param = useParams();
  const userDetail = useRouteLoaderData('root');
  const loggedInUser = userDetail?.username;
  const isLoggedInUser = loggedInUser === param?.user ? true : false;

  const matches = useMatches();

  const user = getFromStorage('user');
  const id = user?.id;

  const submit = useSubmit();

  const data = useLoaderData<typeof loader>();
  const { lines } = data;
  const lineArray = Object.values(lines[0]);
  const [lineData, setLineData] = useState();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const collectLineData = (lines) => {
    setLineData(lines);
  };
  const chips = [
    {
      label: 'Editing..',
      route: `edit`,
      handleChipClick: function () {
        navigate('');
      },
    },
    {
      label: 'Edit Details',
      route: 'details',
      handleChipClick: function () {
        toast.warning('Save leaf to edit details');
        // if (matches[3].id === 'routes/profile.$user/$id.$title/edit') {
        //   setOpen(true);
        // } else {
        //   navigate('form-details');
        // }
      },
    },
    {
      label: 'Publish',
      route: 'publish',
      handleChipClick: function (e) {
        toast.warning('Save leaf to Publish');

        // if (matches[3].id === 'routes/profile.$user/$id.$title/edit') {
        //   setOpen(true);
        // } else {
        //   submit(e, {
        //     method: 'post',
        //   });
        // }
      },
    },
  ];

  const getAvatars = (num: number = 4) => {
    return [...Array(num)].map((v: number) => {
      return {
        src: faker.image.avatar(),
        alt: faker.name.fullName(),
      };
    });
  };

  return (
    <Form method="post">
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        sx={{ p: 1 }}
        style={{ height: `calc(100vh - 75px)` }}
      >
        <Box>
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
                      disabled={chip.label === 'Editing..'}
                      sx={{
                        cursor: 'pointer',
                        fontSize: '10px',
                        fontWeight: '400',
                        lineHeight: '13px',
                      }}
                    />
                  ))}
                </Stack>
              )}
            </Box>
            {/* Modal is not used as form handling from modal could not be done,
             * modal behaved as a seperate form
             */}
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

                <Form method="post">
                  <Box display="flex" justifyContent="end">
                    {/* Todo: Add button type submit, and call action post details on Save  */}
                    <Button
                      className="outlined__button"
                      // type="submit"
                      // name="_action"
                      // value="post_details"
                      onClick={() => navigate(`${matches[2].pathname}`)}
                      sx={buttonStyle}
                      variant="outlined"
                    >
                      Save Changes
                    </Button>
                    <Button
                      className="outlined__button"
                      sx={buttonStyle}
                      variant="outlined"
                      onClick={() => navigate(`${matches[2].pathname}`)}
                    >
                      Don't Save
                    </Button>
                    <Button
                      className="outlined__button"
                      sx={buttonStyle}
                      variant="outlined"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Form>
              </Box>
            </Modal>
          </Box>
          <input
            type="hidden"
            defaultValue={JSON.stringify(lineArray)}
            value={JSON.stringify(lineData)}
            name="lines"
          />
          <input
            type="hidden"
            value={JSON.stringify(lineArray)}
            name="prevLines"
          />
          {/* need to remove after handle by backend */}
          <input type="hidden" name="userId" value={id} />
          <DraftEditor
            title={param.title}
            lines={lineArray}
            collectLineData={collectLineData}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <ComboButton name="_action" value="post_details" />
        </Box>
      </Box>
    </Form>
  );
}

export default edit;
