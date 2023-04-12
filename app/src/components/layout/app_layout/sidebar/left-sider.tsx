import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ReactNodeProps } from '../types';

const LeftMenu = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    // position: 'relative',
    whiteSpace: 'nowrap',
    width: 50,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    height: '100vh',
    backgroundColor: 'white',
  },
}));

const Left = ({ children }: ReactNodeProps) => {
  return (
    <LeftMenu variant="permanent" open>
      {children}
    </LeftMenu>
  );
};

export default Left;
