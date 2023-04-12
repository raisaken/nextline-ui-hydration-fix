import { Icon } from '@iconify/react';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { theme } from '~/styles/theme';
import { Time } from '../typography/icon-title';

//need to remove later
const hero =
  'https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/hero.jpg';
interface UserCommentInterface {
  username: string | undefined;
  comment: string | undefined;
  src: string | undefined;
  duration: string | undefined;
}
const UserComment = ({
  username,
  comment,
  src,
  duration,
}: UserCommentInterface) => {
  return (
    <React.Fragment>
      <Box className="display-f-sb-c " mt={2}>
        <Box className="display-f-c ">
          <Avatar alt={username} src={src} sx={{ width: 24, height: 24 }} />
          <Box ml={1}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '10px',
                lineHeight: '13px',
              }}
            >
              {username}
            </Typography>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '10px',
                lineHeight: '13px',
                color: theme.palette?.default.main,
              }}
            >
              {comment}
            </Typography>
          </Box>
        </Box>
        <Box className="display-f-c ">
          <Time time={duration} />
          <Icon
            icon="material-symbols:more-vert"
            color={theme.palette?.default.main}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default UserComment;
