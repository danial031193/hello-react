import ErrorPage from '../pages/error';
import Forms from '../pages/forms';
import Home from '../pages/home';
import Login from '../pages/login';
import User from '../pages/user';
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
      path: '/user/:name/',
      component: withAuth(User),
    },
    {
      path: '/user/:name/:id',
      component: withAuth(User),
    },
    {
      path: '/login',
      component: Login,
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
