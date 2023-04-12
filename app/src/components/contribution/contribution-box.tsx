// @ts-nocheck

import { Box } from '@mui/material';
import ContributionCard from './contribution-card';
import { useLoaderData } from '@remix-run/react';

export default function ContributionBox() {
  const data = useLoaderData<typeof loader>();
  const maxNoOfLines = data?.maxNoOfLines;
  const { lines } = data;
  const linesArray = lines[0];

  let item = [];
  for (let i = 1; i <= maxNoOfLines; i++) {
    item.push(
      <Box p={1.5} key={i}>
        <ContributionCard lines={linesArray[`${i}`]} index={i} />
      </Box>
    );
  }

  return (
    <Box
      style={{ marginBottom: '5px', overflowY: 'scroll' }}
      className="scrollbar-hidden"
    >
      {item}
    </Box>
  );
}
