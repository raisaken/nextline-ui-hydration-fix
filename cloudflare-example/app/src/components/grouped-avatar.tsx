// @ts-nocheck

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 24,
  height: 24,
  border: `2px solid ${theme.palette.background.paper}`,
}));

interface GroupedAvatarProps {
  total: number;
  images: Image[];
  style?: React.CSSProperties;
}

const GroupedAvatar = ({ total, images, style }: GroupedAvatarProps) => {
  return (
    <AvatarGroup
      total={total}
      style={style}
      //  sx={{
      //   width: 24,
      //   height: 24,
      // }}
    >
      {images?.map((image: Image, idx) => {
        return <SmallAvatar {...image} key={idx} />;
      })}
    </AvatarGroup>
  );
};
export default GroupedAvatar;
