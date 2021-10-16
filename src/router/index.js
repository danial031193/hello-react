import ErrorPage from '../pages/error';
import Forms from '../pages/forms';
import Home from '../pages/home';
import Login from '../pages/login/index.store';
import Register from '../pages/register/index.store';
import User from '../pages/user';
import Users from '../pages/users/index.store';
import withAuth from '../wrappers/withAuth';

/**
 * Project router
 */
export default class SiteRoutes {
  /**
   * Project routes
   */
  static routes = [
    {
      path: '/',
      component: withAuth(Home),
    },
    {
      path: '/forms',
      component: withAuth(Forms),
    },
    {
      path: '/users',
      component: withAuth(Users),
    },
    {
      path: '/user/:id',
      component: withAuth(User),
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '*',
      component: ErrorPage,
    },
  ];

  /**
   * Get site routes
   */
  static getList = () => {
    return [...SiteRoutes.routes];
  };
}
