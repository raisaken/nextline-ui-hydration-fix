import { Link } from '@remix-run/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Slugify } from '~/src/config/slugify';
import { useParams } from '@remix-run/react';

export default function NewLeaf(props) {
  const { type, detail, image } = props;
  const param=useParams()

  return (
    <Link to={`/profile/${param.user}/` + Slugify(type) + '/add-content'}>
      <Card
        sx={{ display: 'flex', cursor: 'pointer', backgroundColor: 'white' }}
      >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="subtitle1">
              {type}
            </Typography>
            <Typography
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '14px',
              }}
            >
              {detail}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
}
