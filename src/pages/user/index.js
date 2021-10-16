import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserItem from './item/index.store';

const User = () => {
  const { id } = useParams();

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

      <UserItem id={Number(id)} />
    </div>
  );
};

export default User;
