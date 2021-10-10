import React from 'react';
import AuthGateway from '../components/auth-gateway';

const withAuth = (WrappedComponent) => {
  return () => (
    <AuthGateway>
      <WrappedComponent />
    </AuthGateway>
  );
};

export default withAuth;
