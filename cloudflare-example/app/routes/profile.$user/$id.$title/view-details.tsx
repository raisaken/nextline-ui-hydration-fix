import { Icon } from '@iconify/react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { LoaderArgs } from '@remix-run/cloudflare';
import { useLoaderData, useNavigate } from '@remix-run/react';
import { useState } from 'react';
import urls from '~/api/endpoint';
import SmallButton from '~/src/components/button/small-button';
import { ContentTitle, Detail, Title } from '~/src/components/typography/title';
import { theme } from '~/styles/theme';
import fetcher from '~/utils/fetcher';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function AccessPanel({ title, detail, userAvatar, button }) {
  return (
    <Box sx={{ my: 1.5 }}>
      <Title title={title} />
      <Box className="display-f-sb-c">
        <Box className="display-f-sb-c" sx={{ my: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ mx: 1, my: 0, backgroundColor: theme.palette?.primary.main }}
          />
          <AvatarGroup
            total={4}
            sx={{
              '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 24, height: 24 }}
              src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              sx={{ width: 24, height: 24 }}
              src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/2.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              sx={{ width: 24, height: 24 }}
              src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              sx={{ width: 24, height: 24 }}
              src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/5.jpg"
            />
            {/* <Component></Component> */}
            <Avatar
              alt="Trevor Henderson"
              sx={{ width: 24, height: 24 }}
              src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/5.jpg"
            />
          </AvatarGroup>
        </Box>
        <Button
          variant="contained"
          sx={{ fontSize: '10px', lineHeight: '13px' }}
        >
          {button}
        </Button>
      </Box>
      <Detail detail={detail} />
    </Box>
  );
}

const NotificationItem = ({ notification }: { notification: string }) => {
  return (
    <Box display="flex" alignItems="center" sx={{ py: 1 }}>
      <Avatar
        alt="Trevor Henderson"
        sx={{ width: 24, height: 24 }}
        src="/static/images/avatar/5.jpg"
      />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ mx: 1, my: 0, backgroundColor: theme.palette?.primary.main }}
      />
      <Box>
        <Typography sx={{ fontSize: '10px', lineHeight: '12px' }}>
          {notification}
        </Typography>
        <Typography sx={{ fontSize: '8px', lineHeight: '10px' }}>
          2:22PM
        </Typography>
      </Box>
    </Box>
  );
};

function ViewDetails() {
  const data = useLoaderData();
  const {
    creator,
    storyBehind,
    maxNoOfLines,
    leafStatus,
    leafSubtype,
    createdAt,
    updatedAt,
  } = data;
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const rightComponent = [
    {
      title: 'Content Type',
      component: (
        <SmallButton title={leafSubtype || 'Song'} backgroundColor="#5FD100" />
      ),
    },
    {
      title: 'Number of lines',
      component: <Detail detail={maxNoOfLines} />,
    },
    {
      title: 'Content Status',
      component: (
        <SmallButton title={leafStatus || 'Draft'} variant="outlined" />
      ),
    },
    {
      title: 'Owner',
      component: <Detail detail={creator.username} />,
    },
    {
      title: 'Modified',
      component: (
        <Detail detail={updatedAt.slice(0, 10) || createdAt.slice(0, 10)} />
      ),
    },
    {
      title: 'Content Story',
      component: <SmallButton title={storyBehind} />,
    },
  ];
  return (
    <Box>
      <Box className="display-f-sb-c">
        <Box display="flex" alignItems="center">
          <Icon
            icon="ic:round-music-note"
            style={{
              backgroundColor: '#5FD100',
              borderRadius: '50%',
              padding: '3px',
              color: 'white',
              marginRight: '5px',
            }}
          />
          <ContentTitle title="Photograph" />
        </Box>
        <Box onClick={() => navigate(-1)}>
          <Icon icon="akar-icons:cross" />
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="View Details"
              {...a11yProps(0)}
              sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '15px' }}
            />
            <Tab
              label="Activity"
              {...a11yProps(1)}
              sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '18px' }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AccessPanel
            title="Who has access"
            detail="Owned by you. Public Content"
            userAvatar="test"
            button="Manage Access"
          />
          <AccessPanel
            title="Content Moderators"
            detail="You are primary moderator. Samantha, Olaf and Kristoff are other moderators.
            Moderators are responsible to make sure all the rules and regulations are being followed. They have the right to take actions against content collaborators like to ban/remove them from this particular content in case of any misconduct(only if they have valid proof).
            "
            userAvatar="test"
            button="    Manage Moderators            "
          />
          <Divider flexItem sx={{ my: 1.5 }} />
          <Box>
            <Title title="Content Details" />
          </Box>
          {rightComponent.map((item,index) => {
            return (
              <Grid container spacing={2} key={index}>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      fontSize: '10px',
                      lineHeight: '12px',
                      my: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box>{item.component}</Box>
                </Grid>
              </Grid>
            );
          })}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Title title="Today" />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
          <NotificationItem notification="You edited the content in PHOTOGRAPH " />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default ViewDetails;
