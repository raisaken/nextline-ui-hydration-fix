// import { Favorite } from '@mui/icons-material';
import { Icon } from '@iconify/react';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import {IconTitle} from './typography/icon-title';
// import IconTitle from '../typography/IconTitle';

const ExpandedStory = ({ creator }) => {
  const { id, name, color, username, photoUrl } = creator;

  return (
    <React.Fragment>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '21px',
          lineHeight: '25px',
        }}
      >
        {name}
      </Typography>
      <Box display="flex" ml={1} mt={1} alignItems="center">
        <Avatar src={photoUrl} alt={username} sx={{ width: 24, height: 24 }} />
        <Box ml={1}>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '8px',
              lineHeight: '10px',
            }}
          >
            what is ur name
          </Typography>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} mt={4}>
        <Typography
          color={'primary'}
          sx={{
            fontWeight: '400',
            fontSize: '9px',
            lineHeight: '11px',
          }}
        >
          Story Behind {name}
        </Typography>

        {/* <IconTitle
          label="2 Comments"
          icon={<Icon icon="material-symbols:favorite" />}
          color="error"
          style={{ marginLeft: '10px' }}
        /> */}
      </Box>
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '10px',
          lineHeight: '16px',
        }}
      >
        But I must explain to you how all this mistaken idea ofs, or avoids
        pleasure itself, because it is pleasure, but because those who do not
        know how to pursue pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or pursues or
        desires to obtain pain of itself, because it is pain, but because
        occasionally circumstances occur in which toil and pain can procure him
        some great pleasure. To take a trivial example, which of us ever
        undertakes laborious physical exercise, except to obtain some advantage
        from it? But who has any right to find fault with a man who chooses to
        enjoy a pleasure that has no annoying consequences, or one who avoids a
        pain that produces no resultant pleasure? On the other hand, we denounce
        with righteous indignation and dislike men who are so beguiled and
        demoralized by the charms of pleasure of the moment, so blinded by
        desire, <br />
        <br />
        That they cannot foresee the pain and trouble that are bound to ensue;
        and equal blame belongs to those who fail in their duty through weakness
        of will, which is the same as saying through shrinking from toil and
        pain. But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences.
      </Typography>

      <img
        style={{ marginTop: '1em' }}
        src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/mountain.jpg"
        alt="mountain"
        width={800}
        height={200}
      />
    </React.Fragment>
  );
};
export default ExpandedStory;
//need to remove later
