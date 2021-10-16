import React from 'react';
import * as PropTypes from 'prop-types';

const UserItem = ({ id, username }) => {
  return (
    <div>
      <p>id: {id}</p>
      <p>username: {username}</p>
    </div>
  );
};

UserItem.propTypes = {
  id: PropTypes.number,
  username: PropTypes.number,
};

export default UserItem;
