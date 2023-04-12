import {
  Box,
  Button,
  Chip,
  Divider,
  Typography,
  Stack,
  Avatar,
} from '@mui/material';
import { useLoaderData, useRouteLoaderData } from '@remix-run/react';
import { Icon } from '@iconify/react';
import user_profile from '~/src/mock/profile';
import { theme } from '~/styles/theme';

const followerCountData = [
  {
    count: '20',
    title: 'Posts',
  },
  {
    count: '2.5K',
    title: 'Posts',
  },
  {
    count: '3K',
    title: 'Following',
  },
];

interface FollowerCountInterface {
  count: string;
  title: string;
}

const FollowerCount = ({ count, title }: FollowerCountInterface) => {
  return (
    <Box textAlign={'center'} padding={1.2}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '19px',
        }}
      >
        {count}
      </Typography>
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '10px',
          lineHeight: '13px',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const tags = [
  {
    name: 'Tag',
  },
  {
    name: 'Tag',
  },
  {
    name: 'Tag',
  },
];

import type { CatchBoundaryComponent } from '@remix-run/react';
export const CatchBoundary: CatchBoundaryComponent = ({ error }) => {
  return <>{error}, Error on Profile</>;
};

function Profile() {
  const userData = useLoaderData<typeof loader>();
  const user = userData.userObject;
  const data = useRouteLoaderData('root');
  const loggedInUser = data?.username;
  const isLoggedInUser = loggedInUser === user.username ? true : false;
  return (
    <Box sx={{ p: 2, backgroundColor: '#fcfcfc' }}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        sx={{ py: 2 }}
      >
        <Box paddingTop={3} paddingBottom={0.6}>
          <Avatar src={user?.photoUrl} alt={user?.username} />
        </Box>
        <Box paddingBottom={1} display="flex" flexDirection="column">
          <Typography
            textAlign={'center'}
            lineHeight={'1'}
            sx={{ fontSize: '20px' }}
          >
            {user?.username}
          </Typography>
          <Typography
            fontSize="8px"
            textAlign={'center'}
            lineHeight={'1'}
            sx={{ py: 1 }}
          >
            {user?.email}
          </Typography>
          <Typography fontSize="8px" lineHeight={'1'} component="span">
            {user.position}
          </Typography>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          paddingBottom={1}
        >
          {user_profile[0]?.followerCount?.map((followDetail, index) => {
            return (
              <FollowerCount
                {...followDetail}
                count={followDetail?.count?.toString()}
                key={index}
              />
            );
          })}
        </Box>
        {isLoggedInUser ? (
          <Button
            size="small"
            variant="contained"
            fullWidth
            sx={{
              color: theme.palette.primary.main,
            }}
          >
            Edit Profile
          </Button>
        ) : (
          <Stack direction="row" spacing={0.5}>
            <Button
              size="small"
              variant="contained"
              fullWidth
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              Follow
            </Button>
            <Button
              size="small"
              variant="contained"
              fullWidth
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              Message
            </Button>
          </Stack>
        )}
      </Box>
      <Divider sx={{ width: '100%' }} />

      <Box
        display="flex"
        alignItems="start"
        flexDirection="column"
        sx={{ py: 2 }}
      >
        <Typography
          variant="subtitle1"
          lineHeight={'1'}
          sx={{
            fontWeight: '700',
            fontSize: '10px',
            lineHeight: '12px',
          }}
        >
          About me
        </Typography>
        <Typography
          variant="body2"
          lineHeight={'1'}
          sx={{
            py: 1,
            fontWeight: '400',
            fontSize: '10px',
            lineHeight: '12px',
          }}
        >
          {user.bio}
        </Typography>
        <Typography
          variant="body2"
          lineHeight={'1'}
          sx={{
            py: 1,
            fontWeight: '400',
            fontSize: '10px',
            lineHeight: '12px',
          }}
        >
          Languages: Nepali, English , Hindi
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ columnGap: '10px' }}
        >
          {/* <Icon icon="mdi:youtube" width="24" height="24" color="#FF0000" />
          <Icon icon="mdi:facebook" width="24" height="24" color="#3b5998" />
          <Icon icon="mdi:instagram" width="24" height="24" color="#feda75" />
          <Icon icon="mdi:twitter" width="24" height="24" color="#00acee" />
          <Icon icon="mdi:linkedin" width="24" height="24" color="#0072b1" /> */}
          <Icon icon="mdi:youtube" width="24" height="24" color="#646464" />
          <Icon icon="mdi:facebook" width="24" height="24" color="#646464" />
          <Icon icon="mdi:instagram" width="24" height="24" color="#646464" />
          <Icon icon="mdi:twitter" width="24" height="24" color="#646464" />
          <Icon icon="mdi:linkedin" width="24" height="24" color="#646464" />
        </Box>
      </Box>
      <Divider sx={{ width: '100%' }} />
      <Typography
        variant="subtitle1"
        lineHeight={'1'}
        sx={{
          my: 1,
          fontWeight: '700',
          fontSize: '10px',
          lineHeight: '12px',
        }}
      >
        Tags
      </Typography>
      <Box>
        {tags.map((item, idx) => (
          <Chip
            key={idx}
            label={item.name}
            size="small"
            sx={{
              mr: 1,
              fontWeight: '400',
              fontSize: '8px',
              lineHeight: '10px',
            }}
            onClick={handleClick}
            onDelete={handleDelete}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Profile;
