const urls = {
  auth: {
    login: '/login',
    me: '/users/me',
  },
  user: {
    me: '/users/me',
    user_info: '/userinfo/:username',
    id: '/user/:id',
  },
  content: {
    get_content: '/leaf_content',
    filtered_content: '/leaf_contentfiltered',
    get_content_by_id: '/leaf_content/:id',
    comment: '/leaf_content_comment',
    comment_by_id: '/leaf_content_comment',
  },
  line: {
    leaf_line: '/leaf_line',
    leaf_line_id: '/leaf_line/:id',
  },
};

export default urls;
