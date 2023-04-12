import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ReactNodeProps } from '../types';

const RightMenu = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 50,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    float: 'right',
    boxSizing: 'border-box',
    height: '95vh',
    borderLeft: '1px solid #0000001f',
    backgroundColor: 'white',
  },
}));

const Right = ({ children }: ReactNodeProps) => {
  return (
    <RightMenu variant="permanent" open>
      {children}
    </RightMenu>
  );
};

export default Right;
