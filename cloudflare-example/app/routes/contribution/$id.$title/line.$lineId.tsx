import { Icon } from '@iconify/react';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import UserComment from '~/src/components/comments/user-comment';
import {
  Comment,
  IconTitle,
  Like,
  Time,
  Upvote,
} from '~/src/components/typography/icon-title';
import { theme } from '~/styles/theme';

const comments = [
  {
    name: 'Shaiba Bali',
    comment: ' Nice song...',
    time: '1 day ago',
  },
  {
    name: 'John doe',
    comment: ' Nice song...',
    time: '1 day ago',
  },
];

import type { LoaderArgs, LoaderFunction } from '@remix-run/node';
import fetcher from '~/utils/fetcher';
import urls from '~/api/endpoint';
import { CatchBoundaryComponent, useMatches } from '@remix-run/react';
import moment from 'moment';
export const loader: LoaderFunction = async ({
  request,
  params,
}: LoaderArgs) => {
  let user;
  const leaf = await fetcher(
    request,
    urls.line.leaf_line_id.replace(':id', params.lineId),
    'GET'
  );
  if (!leaf) {
    throw new Response('User not Found, line.$lineId', { status: 404 });
  } else {
    user = await fetcher(
      request,
      urls.user.id.replace(':id', leaf.creatorId),
      'GET'
    );
  }
  return { user, leaf };
};
export const CatchBoundary: CatchBoundaryComponent = ({ error }) => {
  return <>{error}, Error on id title line $lineId</>;
};

function LineDetail() {
  const navigate = useNavigate();
  const { user, leaf } = useLoaderData<typeof loader>();
  const [isLikedByMe, setIsLikedByMe] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const match = useMatches();

  const handleLike = () => {
    setIsLikedByMe((like) => {
      setLikeCount((likeCount) => (like ? likeCount - 1 : likeCount + 1));
      return !like;
    });
  };
  return (
    <Box>
      <Box display="flex" justifyContent="flex-end">
        <Icon
          icon="mdi:multiply"
          width="20"
          height="20"
          onClick={() => {
            navigate(`${match[1].pathname}`);
            return;
          }}
          style={{ cursor: 'pointer' }}
        />
      </Box>
      <Box className="display-f-sb-c">
        <Box className="display-f-c">
          <Avatar
            alt="Trevor Henderson"
            sx={{ width: 24, height: 24 }}
            src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/5.jpg"
          />
          <Box display="flex" flexDirection="column" sx={{ ml: 1 }}>
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '12px',
                lineHeight: '15px',
              }}
            >
              {user.username}
            </Typography>
            <Time time={leaf.createdAt}></Time>
          </Box>
        </Box>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '36px',
          }}
        >
          7
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '13px',
          lineHeight: '16px',
          mt: 2,
          mb: 4,
        }}
      >
        {leaf.lineData}
      </Typography>
      <Box display={'flex'} mt={2} alignItems="center" ml={1}>
        <Comment count={3} />
        <Like count={3} />
        <Upvote count={3} />
      </Box>
      <Divider sx={{ marginTop: '16px' }} />
      {comments.map((item, index) => (
        <UserComment
          username={item.name}
          comment={item.comment}
          duration={item.time}
          key={index}
        />
      ))}
    </Box>
  );
}

export default LineDetail;
