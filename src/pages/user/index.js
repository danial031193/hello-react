import React from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
  const { id, name } = useParams();

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
      User ID: {id ?? 'none'}
      <br />
      User Name: {name ?? 'none'}
    </div>
  );
};

export default User;
