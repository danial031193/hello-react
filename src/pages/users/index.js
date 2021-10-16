import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateUserForm from '../../components/create-user-form/index.store';
import styles from './styles.module.scss';

const Users = ({ users, removeUser, accountId }) => {
  const deleteUser = useCallback(
    (id) => {
      if (id === accountId) {
        alert("You can't delete yourself");
        return;
      }

      removeUser(id);
    },
    [accountId, removeUser],
  );

  return (
    <div>
      <h1>Users</h1>

      <h3>Create New</h3>
      <CreateUserForm />

      <h3>Users List</h3>
      {users.map((user) => {
        return (
          <div key={user.id} className={styles.row}>
            <Link to={`/user/${user.id}`} className={styles.link}>
              {user.username}
            </Link>
            <button onClick={() => deleteUser(user.id)}>Delete user</button>
          </div>
        );
      })}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  accountId: PropTypes.number,
  removeUser: PropTypes.func,
};

export default Users;
