import Post from '@components/post';
import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import UserItem from './item/index.store';

const User = ({ getUserPosts, posts }) => {
  const { id } = useParams();

  useEffect(() => getUserPosts(id), [getUserPosts, id]);

  return (
    <div>
      <Link
        to={{
          pathname: '/forms',
          search: '?sort=name',
          hash: '#the-hash',
          state: { from: 'User' },
        }}
      >
        Link with object prop
      </Link>
      <br />

      {posts.map(({ userId, id: pId, title, body }) => (
        <Post key={pId} body={body} title={title} userId={userId} />
      ))}

      <UserItem id={Number(id)} />
    </div>
  );
};

User.propTypes = {
  posts: PropTypes.array,
  getUserPosts: PropTypes.func,
};

export default User;
