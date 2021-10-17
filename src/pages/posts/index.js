import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';

const Posts = ({ posts, error, loading, getPosts }) => {
  useEffect(() => getPosts('test-123'), [getPosts]);

  return (
    <div>
      <h1>Posts</h1>
      <br />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        posts.map(({ userId, id, title, body }) => (
          <ul key={id}>
            <li>User ID: {userId}</li>
            <li>Title: {title}</li>
            <li>Description: {body}</li>
          </ul>
        ))
      )}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  getPosts: PropTypes.func,
};

export default Posts;
