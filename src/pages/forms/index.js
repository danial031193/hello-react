import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ControlledForm from './controlled';
import UncontrolledForm from './uncontrolled';

const Forms = () => {
  const location = useLocation();

  return (
    <>
      <Link to="/">Go to home page</Link>
      <br />
      <p>Navigated from {location.state?.from ?? ''}</p>
      <br />
      Controlled Form
      <ControlledForm />
      <br />
      Uncontrolled Form
      <UncontrolledForm />
    </>
  );
};

export default Forms;
