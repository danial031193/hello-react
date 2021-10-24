import Post from '@components/post';
import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';

const Posts = ({ posts, error, loading, getPosts }) => {
  useEffect(() => getPosts(), [getPosts]);

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
          <Post key={id} body={body} title={title} userId={userId} />
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
