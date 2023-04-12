import { Typography } from '@mui/material';

interface title {
  title?: string;
  detail?: string;
}

function Title({ title }: title) {
  return (
    <Typography
      sx={{
        fontWeight: '700',
        fontSize: '13px',
        lineHeight: '16px',
        color: '#646464',
      }}
    >
      {title}
    </Typography>
  );
}

function ContentTitle({ title }: title) {
  return (
    <Typography
      sx={{
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#3C8A8B',
      }}
    >
      {title}
    </Typography>
  );
}
function Detail({ detail }: title) {
  return (
    <Typography
      sx={{
        fontWeight: '400',
        fontSize: '8px',
        lineHeight: '10px',
        color: '#646464',
      }}
    >
      {detail}
    </Typography>
  );
}



export { Title, ContentTitle, Detail };
