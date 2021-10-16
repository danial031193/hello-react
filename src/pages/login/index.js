import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import styles from './styles.module.scss';

const Login = ({ usersList, login, accountId }) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState('');

  const onChangeInput = (e) => {
    const newValues = { [e.target.name]: e.target.value };
    setValues({ ...values, ...newValues });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = values;

    const user = usersList.find((u) => u.username === username);

    if (user?.password === password) {
      login(user.id);
    } else {
      setError('Wrong credentials');
    }
  };

  if (accountId) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Username</p>
        <input type="text" name="username" onChange={onChangeInput} value={values.username} />
      </label>

      <label>
        <p>Password</p>
        <input type="password" name="password" onChange={onChangeInput} value={values.phone} />
      </label>

      {error && <p>{error}</p>}

      <button type="submit">Submit form</button>

      <Link to="/register" className={styles.link}>
        Register new user
      </Link>
    </form>
  );
};

Login.propTypes = {
  accountId: PropTypes.number,
  usersList: PropTypes.array,
  login: PropTypes.func,
};

export default Login;
