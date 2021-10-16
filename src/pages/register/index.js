import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import CreateUserForm from '../../components/create-user-form/index.store';
import styles from './styles.module.scss';

const Register = ({ accountId }) => {
  if (accountId) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <CreateUserForm />
      <Link to="/login" className={styles.link}>
        Login
      </Link>
    </>
  );
};

Register.propTypes = {
  addUser: PropTypes.func,
  accountId: PropTypes.number,
};

export default Register;
