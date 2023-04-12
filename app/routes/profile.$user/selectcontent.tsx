import { Box, Grid, Typography } from '@mui/material';
import NewLeaf from '~/src/components/cards/new-leaf';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
import { theme } from '~/styles/theme';

//need to remove later
const song="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/song.svg"
const poem="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/story.svg"
const story="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/poem.svg"


const leafs = [
  {
    type: 'Song',
    detail:
      ' This category includes song creation, composition, lyrics            contribution',
    image: song,
  },
  {
    type: 'Story',
    detail:
      ' This category includes song creation, composition, lyrics            contribution',
    image: story,
  },
  {
    type: 'Art',
    detail:
      ' This category includes song creation, composition, lyrics            contribution',
    image: story,
  },
  {
    type: 'Poem',
    detail:
      ' This category includes song creation, composition, lyrics            contribution',
    image: poem,
  },
  {
    type: 'Comic Strips',
    detail:
      ' This category includes song creation, composition, lyrics            contribution',
    image: poem,
  },
  {
    type: 'Standup Comedy',
    detail:
      ' This category includes song creation, composition, lyrics            contribution',
    image: song,
  },
];
function SelectContent() {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex" justifyContent="space-between" sx={{ pb: 5 }}>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '24px',
            color: theme.palette.primary.main,
          }}
        >
          Select Content Category
        </Typography>
        <Icon
          icon="mdi:multiply"
          width="20"
          height="20"
          onClick={() => {
            navigate(-1);
            return;
          }}
        />
      </Box>
      <Grid container columnSpacing={2} rowSpacing={5}>
        {leafs.map((item,index) => (
          <Grid key={index} item xs={6} md={6}>
            <NewLeaf
              type={item.type}
              detail={item.detail}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SelectContent;
