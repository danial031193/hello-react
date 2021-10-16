import React from 'react';
import AuthGateway from '../components/auth-gateway/index.store';

const withAuth = (WrappedComponent) => {
  return () => (
    <AuthGateway>
      <WrappedComponent />
    </AuthGateway>
  );
};

export default withAuth;
