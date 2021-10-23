import React from 'react';
import * as PropTypes from 'prop-types';

const CreateUserForm = ({ addUser, values, setValue }) => {
  const onChangeInput = (e) => setValue(e.target.name, e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Username</p>
        <input type="text" name="username" onChange={onChangeInput} value={values.username} />
      </label>

      <label>
        <p>Password</p>
        <input type="password" name="password" onChange={onChangeInput} value={values.password} />
      </label>

      <button type="submit">Submit form</button>
    </form>
  );
};

CreateUserForm.propTypes = {
  addUser: PropTypes.func,
  setValue: PropTypes.func,
  values: PropTypes.object,
};

export default CreateUserForm;
