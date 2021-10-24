import React from 'react';
import * as PropTypes from 'prop-types';

const Post = ({ userId, title, body }) => {
  return (
    <ul>
      <li>User ID: {userId}</li>
      <li>Title: {title}</li>
      <li>Description: {body}</li>
    </ul>
  );
};

Post.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
