import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { getIsAuth } from '../../helpers/auth';

const username = 'user';
const password = '1234';

const Login = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState('');

  const history = useHistory();

  const onChangeInput = (e) => {
    const newValues = { [e.target.name]: e.target.value };
    setValues({ ...values, ...newValues });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    if (values.username === username && values.password === password) {
      window.localStorage.setItem('isAuth', 'true');
      history.push('/');
    } else {
      setError('Wrong credentials');
    }
  };

  if (getIsAuth()) {
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
    </form>
  );
};

export default Login;
