import React, { useState, useRef } from 'react';

const ControlledForm = () => {
  const [values, setValues] = useState({});

  const phoneRef = useRef();

  const onChangeInput = (e) => {
    const newValues = { [e.target.name]: e.target.value };
    setValues({ ...values, ...newValues });

    if (newValues?.name?.length > 5) {
      phoneRef.current?.focus();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name</p>
        <input type="text" name="name" onChange={onChangeInput} value={values.name} />
      </label>

      <label>
        <p>Phone</p>
        <input
          ref={phoneRef}
          type="text"
          name="phone"
          onChange={onChangeInput}
          value={values.phone}
        />
      </label>

      <button type="submit" disabled={!values.name || !values.phone}>
        Submit form
      </button>
    </form>
  );
};

export default ControlledForm;
