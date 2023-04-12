// @ts-nocheck

import { Typography, Fab, Box } from '@mui/material';
import ContributionLineCard from './contribution-line-card';
import { theme } from '../../../styles/theme';
import ContributionInput from './contribution-input';

export default function LeafDetail() {
  const lyricList = [
    {
      title: 'Some where over the rainbow',
      time: '2 days ago',
      like: '2',
      vote: '15',
      username: 'Ganesh',
    },
    {
      title: 'Way up high',
      time: '1 days ago',
      like: '5',
      vote: '7',
      username: 'Thomas',
      child: [],
    },
  ];

  return (
    <Box sx={{ padding: '20px', height: '100%',width:'100%' }}>
      <Box
        sx={{
          border: 0.5,
          borderColor: '#D3D3D3',
          borderRadius: '8px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Fab
            aria-label="add"
            sx={{
              marginTop: '-20px',
              marginLeft: '8px',
              height: '15px',
              width: '35px',
              backgroundColor: `${theme?.palette?.primary?.main}`,
            }}
          >
            <Typography variant="h6" color={theme.palette?.white?.main}>
              2
            </Typography>
          </Fab>
          {lyricList.map((item, index) => (
            <Box style={{ height: '59px' }} key={index}>
              <ContributionLineCard item={item} />
            </Box>
          ))}
        </Box>
        <ContributionInput />
      </Box>
    </Box>
  );
}
