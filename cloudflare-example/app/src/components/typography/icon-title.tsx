import React from 'react';

import { Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { theme } from '~/styles/theme';
import moment from 'moment';

interface IconTitleInterface {
  label: string;
  color?: string;
  icon?: any;
  userColor?: any;
}
const IconTitle = ({ label, icon, color, userColor }: IconTitleInterface) => {
  return (
    <React.Fragment>
      <Box
        display={'flex'}
        alignItems={'center'}
        sx={{ mr: 1, cursor: 'pointer' }}
      >
        {icon && icon}
        <Typography
          ml={0.2}
          sx={{
            fontWeight: '400',
            fontSize: '10px',
            lineHeight: '13px',
            color: color || '',
          }}
        >
          {label}
        </Typography>
        {userColor && userColor}
      </Box>
    </React.Fragment>
  );
};

function Comment({ count }: { count: number }) {
  return (
    <IconTitle
      label={`${count} comments`}
      color={theme.palette?.primary.main}
      icon={
        <Icon
          icon="basil:comment-solid"
          color={theme.palette?.primary.main}
          width="20"
          height="20"
        />
      }
    />
  );
}

function Like({ count }: { count: number }) {
  return (
    <IconTitle
      label={`${count} likes`}
      color="red"
      icon={
        <Icon icon="basil:comment-solid" color="red" width="20" height="20" />
      }
    />
  );
}
function Upvote({ count }: { count: number }) {
  return (
    <IconTitle
      label={`${count} upvotes`}
      color={theme.palette?.primary.main}
      icon={
        <Icon
          icon="bxs:upvote"
          width="20"
          height="20"
          color={theme.palette?.primary.main}
        />
      }
    />
  );
}
function Time({ time }: { time?: string }) {
  const now=moment()
  return (
    <Box className="display-f-c">
      <Icon icon="ic:outline-access-time" color="#959595"></Icon>
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '10px',
          lineHeight: '13px',
          color: '#959595',
          pl: 1,
        }}
      >
        {time
          ? moment(time).from(now)
          : moment('20221031', 'YYYYMMDD').from(now)}
      </Typography>
    </Box>
  );
}

export { IconTitle, Comment, Like, Upvote, Time };
