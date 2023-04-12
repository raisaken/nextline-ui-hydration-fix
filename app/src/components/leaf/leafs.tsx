import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  Chip,
  IconButton,
  Modal,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import {
  CatchBoundaryComponent,
  Form,
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from '@remix-run/react';
import React, { useEffect } from 'react';
import Leaf from './leaf';
import { useLoaderData, useRouteLoaderData } from '@remix-run/react';
import { theme } from '~/styles/theme';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { filter_leaf } from '~/src/mock/filter';
import { FilterField } from '../filter-field';

export const CatchBoundary: CatchBoundaryComponent = ({ error }) => {
  return <>{error}, Error on leafs </>;
};

//will replace in future
const nodata =
  'https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/no_data.svg';

const NoContents = () => (
  <>
    <img style={image_style} src={nodata} alt="Logo" width={50} height={50} />
  </>
);

export interface leaf {
  id: string;
  title: string;
  date: string;
  tag: string;
  activeItem: int;
  onSetActiveItem: () => void;
}

const image_style = {
  height: '100%',
  alignItems: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '70%',
};
const leaf_style = {
  fontWeight: '700',
  fontSize: '13px',
  lineHeight: '16px',
};
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Leafs() {
  const navigate = useNavigate();
  const data = useRouteLoaderData('root');
  const [params] = useSearchParams();
  const searchParams = Object.fromEntries(params.entries());
  const loggedInUser = data?.username;
  const { leafObject, userObject } = useLoaderData<typeof loader>();
  const isLoggedInUser = loggedInUser === userObject?.username ? true : false;
  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    isLoggedInUser ? setValue('Draft') : setValue('Published');
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [leafObject]);

  const [activeItem, setActiveItem] = React.useState<string | null>();

  const onSetActiveItem = (id: string | null) => {
    setActiveItem(id);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleClick = () => {
    data?.userObject ? navigate('selectcontent') : navigate('/login');
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const getleafs = (tab) => {
    return leafObject
      ?.filter((item) =>
        tab === 'Draft'
          ? item.leafStatus === tab || item.leafStatus === null
          : item.leafStatus === tab
      )
      ?.map((item: leaf) => (
        <Leaf
          key={item.id}
          id={item.id}
          title={item.contentTitle}
          date={item.updatedAt || item.createdAt}
          tag={item.genre}
          onSetActiveItem={onSetActiveItem}
          activeItem={activeItem}
        />
      ));
  };

  return (
    <Box
      sx={{ width: '100%', overflowY: 'scroll' }}
      className="scrollbar-hidden"
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 0,
            borderColor: 'divider',
            position: 'sticky',
            top: 0,
            background: 'white',
            zIndex: 2,
          }}
        >
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            {isLoggedInUser && (
              <Tab label="Draft" value="Draft" style={leaf_style} />
            )}{' '}
            <Tab label="Published" value="Published" style={leaf_style} />
            <Tab label="Released" value="Released" style={leaf_style} />
            <Tab label="Contributed" value="Contributed" style={leaf_style} />
            <Tab label="Bookmarked" value="Bookmarked" style={leaf_style} />
          </TabList>
        </Box>
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ margin: '1em 1.5em 0 1.5em ' }}
          >
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '17px',
              }}
            >
              {value}(
              {
                leafObject.filter((item) =>
                  value === 'Draft'
                    ? item.leafStatus === value || item.leafStatus === null
                    : item.leafStatus === value
                ).length
              }
              )
            </Typography>
            <Box className="display-f-sb-c">
              <Chip
                label="Add"
                size="small"
                sx={{
                  mr: 1,
                  color: theme.palette?.white.main,
                  background: theme.palette?.primary.main,
                  ':hover': {
                    bgcolor: theme.palette?.secondary.main,
                    color: theme.palette.white.main,
                  },
                }}
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={
                  <Icon
                    icon="material-symbols:add"
                    width="20"
                    height="20"
                    color={theme.palette?.primary.main}
                  />
                }
              />
              <IconButton onClick={handleOpen}>
                <Icon
                  icon="material-symbols:filter-list"
                  color={theme.palette.primary.main}
                />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Form method="post">
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Filter Contents
                    </Typography>
                    {filter_leaf?.map((item, idx) => (
                      <FilterField
                        key={idx}
                        fullWidth
                        label={item.label}
                        name={item.name}
                        defaultValue={searchParams[`${item.name}`]}
                        required={item.required}
                        type={item.type}
                        options={item.options}
                        filterLabel={item.filterLabel}
                      />
                    ))}
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      name="_action"
                      value="filter_leafs"
                    >
                      {' '}
                      Filter
                    </Button>
                  </Box>
                </Form>
              </Modal>
            </Box>
          </Box>
        </>

        <TabPanel value="Draft">
          {leafObject.filter(
            (item) => item.leafStatus === 'Draft' || item.leafStatus === null
          ).length > 0 ? (
            getleafs('Draft')
          ) : (
            <NoContents />
          )}
        </TabPanel>

        <TabPanel value="Published">
          {leafObject.filter((item) => item.leafStatus === 'Published').length >
          0 ? (
            getleafs('Published')
          ) : (
            <NoContents />
          )}
        </TabPanel>
        <TabPanel value="Released">
          {leafObject.filter((item) => item.leafStatus === 'Released').length >
          0 ? (
            getleafs('Released')
          ) : (
            <NoContents />
          )}
        </TabPanel>
        <TabPanel value="Contributed">
          <NoContents />
        </TabPanel>
        <TabPanel value="Bookmarked">
          <NoContents />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Leafs;
