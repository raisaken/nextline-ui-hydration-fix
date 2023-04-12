import { Button } from '@mui/material';

interface smallbutton {
  title: string;
  backgroundColor?: string;
  variant?: string;
}

function SmallButton({ title, backgroundColor, variant }: smallbutton) {
  return (
    <Button
      variant={variant ? 'outlined' : 'contained'}
      sx={{
        backgroundColor: backgroundColor,
        padding: '0px 8px',
        minWidth: 'fit-content',
        height: '15px',
        fontSize: '9px',
      }}
    >
      {title}
    </Button>
  );
}

export default SmallButton;
