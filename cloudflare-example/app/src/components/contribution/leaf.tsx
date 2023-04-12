import { Icon } from '@iconify/react';
import {
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React, { createRef, useEffect, useState, useRef } from 'react';
import CommentList from '~/src/mock/comment.json';
import UserComment from '../comments/user-comment';
// import ExpandedStory from '../leafs_content/ExpandedStory';
// import ModalBox from '../modal/ModalBox';
import ReadMore from '../read_more/read-more';
import { Comment, IconTitle, Like, Time } from '../typography/icon-title';
import ModalBox from '../modal/ModalBox';
import ExpandedStory from '../expanded-story';
import { theme } from '~/styles/theme';
import {
  Form,
  useLoaderData,
  useMatches,
  useRouteLoaderData,
  useTransition,
} from '@remix-run/react';
import moment from 'moment';

//need to remove later
const hero =
  'https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/hero.jpg';

const Leaf = () => {
  const content = useLoaderData<typeof loader>();
  let comments = content?.comments;
  let lines = content?.lines;
  const { id, name, color, username, photoUrl } = content.creator;
  const { createdAt } = content;
  const [openModal, setOpenModal] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [commentList, setCommentList] = useState(CommentList);
  const [comment, setComment] = useState('');
  const [isLikedByMe, setIsLikedByMe] = useState(false);
  const [likeCount, setLikeCount] = useState(commentList[0].like);

  const divRef = createRef();
  const text =
    'Sunshine, we do not belong here. We got no flowers to grow, But it' +
    'feels so good with you on me, baby Yeah it feels so good when you know' +
    'when you know  what happened with you please tell me  i can understand you and you have to understand me';

  const l = text.length;
  const handleModalClick = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleLike = () => {
    setIsLikedByMe((like) => {
      setLikeCount((likeCount) => (like ? likeCount - 1 : likeCount + 1));
      return !like;
    });
  };

  const onKeyPress = (e: React.KeyboardEvent<Element>) => {
    if (e.key === 'Enter') {
      const newCommentList = commentList;
      const newComment = [
        ...commentList[0].comments,
        {
          id: 4,
          username: 'Salman Khan',
          time: '<1 min',
          comment: comment,
        },
      ];
      newCommentList[0].comments = newComment;
      setCommentList(newCommentList);
      // setComment('');
    }
  };

  const formRef = useRef();
  let transition = useTransition();
  let isAdding =
    transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'post_comment';

  useEffect(() => {
    if (!isAdding) {
      formRef.current?.reset();
    }
  }, [isAdding]);

  return (
    <React.Fragment>
      <Box
        display={'flex'}
        flexDirection="column"
        sx={{ p: 1, backgroundColor: '#fcfcfc', height: `calc(100vh - 75px)` }}
        justifyContent="space-between"
      >
        <Box>
          <Box display="flex" ml={1} mt={1}>
            <Avatar alt="Remy Sharp" src={photoUrl} />
            <Box ml={2} sx={{ width: '100%' }}>
              <Box className="display-f-sb-c">
                <Typography
                  variant="h6"
                  sx={{ fontSize: '12px', fontWeight: 700, lineHeight: '15px' }}
                >
                  {name}
                </Typography>
                <Box className="display-f-sb-c">
                  <Time time={createdAt} />
                  <Icon
                    icon="material-symbols:more-vert"
                    color={theme.palette?.default.main}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '10px',
                  lineHeight: '13px',
                }}
              >
                Content Initiated by {username}
              </Typography>
            </Box>
          </Box>
          <Box pt={1} pb={1}>
            <ReadMore lines={lines} />
          </Box>
          <Box>
            <Chip
              size="small"
              label="Story"
              color="primary"
              variant="outlined"
              sx={{
                margin: '3px',
                color: theme.palette?.primary.main,
                borderColor: theme.palette?.primary.main,
              }}
              onClick={handleModalClick}
            />
            <Chip
              label="Contract"
              color="primary"
              size="small"
              variant="outlined"
              sx={{
                margin: '3px',
                color: theme.palette?.primary.main,
                borderColor: theme.palette?.primary.main,
              }}
              // onClick={handleModalClick}
            />
          </Box>
          <Box display={'flex'} mt={2} alignItems="center" ml={1}>
            <Comment count={comments?.length} />
            <Like count={comment?.length} />
          </Box>
          <Divider sx={{ marginTop: '16px' }} />
          {comments.map((item, index) => (
            <UserComment
              key={index}
              username={item.creator.username}
              comment={item.commentData}
              duration={item.createdAt}
              src={item.creator.photoUrl}
            />
          ))}
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          <Form method="post" ref={formRef}>
            <TextField
              name="commentData"
              placeholder="Write a comment"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="ic:baseline-tag-faces" />
                    <IconButton
                      size="small"
                      type="submit"
                      name="_action"
                      value="post_comment"
                    >
                      <Icon icon="material-symbols:send-outline" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Form>
        </Box>
      </Box>
      {openModal && (
        <ModalBox open={openModal} handleClose={handleModalClose}>
          {<ExpandedStory creator={content.creator} />}
        </ModalBox>
      )}
    </React.Fragment>
  );
};
export default Leaf;
