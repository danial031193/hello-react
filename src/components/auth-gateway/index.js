import React, { PureComponent } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import * as PropTypes from 'prop-types';

/**
 * Component for implementation secure feature.
 * Protect some pages with authentication.
 */
class AuthGateway extends PureComponent {
  render() {
    const { location, accountId } = this.props;

    const isAuth = accountId;
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

AuthGateway.propTypes = {
  accountId: PropTypes.number,
};

export default withRouter(AuthGateway);
