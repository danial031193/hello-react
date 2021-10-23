import React from 'react';
import { AuthGateway } from '@components/index';

const withAuth = (WrappedComponent) => {
  return () => (
    <AuthGateway>
      <WrappedComponent />
    </AuthGateway>
  );
};

export default withAuth;
