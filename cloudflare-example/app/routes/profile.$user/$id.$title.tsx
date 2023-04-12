import { Box } from '@mui/material';
import { Outlet } from 'react-router';

// Note: 422 Unprocessable Content error will appear if the values are not sent according to its type

function Content() {
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      sx={{ width: '100%', overflowY: 'scroll' }}
      className="lines"
    >
      <Outlet />
    </Box>
  );
}

export default Content;
