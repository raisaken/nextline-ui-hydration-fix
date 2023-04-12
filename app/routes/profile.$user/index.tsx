import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function DefaultPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '90vh' }}
    >
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '18px',
          color: '#8c8c8c',
        }}
      >
        Select a content to get a detailed view
      </Typography>
    </Box>
  );
}

export default DefaultPage;
