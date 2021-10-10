import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from './data';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {links.map(({ to, title, exact }) => (
        <NavLink
          key={to}
          to={to}
          exact={exact}
          className={styles.link}
          activeClassName={styles.active}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
