import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

const CreateUserForm = ({ addUser }) => {
  const [values, setValues] = useState({});

  const onChangeInput = (e) => {
    const newValues = { [e.target.name]: e.target.value };
    setValues({ ...values, ...newValues });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = values;
    addUser(username, password);
    alert(`user ${username} added!`);
  };

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

      <button type="submit">Submit form</button>
    </form>
  );
};

CreateUserForm.propTypes = {
  addUser: PropTypes.func,
};

export default CreateUserForm;
