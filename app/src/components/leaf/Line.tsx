import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './menulist.module.css';

export interface line {
  line: string;
  no: number;
  color: string;
}
const Line = (props: line) => {
  const { line, no, color } = props;
  // let line = 'Default line';
  // let no = 1;
  // let color = 'red';
  return (
    <React.Fragment>
      <Box p={1} display={'flex'} sx={{ cursor: 'pointer' }} paddingBottom={1}>
        <Typography paddingRight={2} color={color} fontWeight={600}>
          {no}
        </Typography>
        <Typography>{line}</Typography>
      </Box>
    </React.Fragment>
  );
};

export default Line;
