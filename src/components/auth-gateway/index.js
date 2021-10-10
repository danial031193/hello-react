import React, { PureComponent } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { getIsAuth } from '../../helpers/auth';

/**
 * Component for implementation secure feature.
 * Protect some pages with authentication.
 */
class AuthGateway extends PureComponent {
  render() {
    const { location } = this.props;

    const isAuth = getIsAuth();
    const prevUrl = `${location.pathname}${location.search}`;

    return (
      <>
        {(isAuth && this.props.children) || (
          <Redirect to={{ pathname: '/login', state: { prevUrl } }} />
        )}
      </>
    );
  }
}

export default withRouter(AuthGateway);
