import React from 'react';
import '../app.css';
import { NavLink } from 'react-router-dom';
import '../app.css';
import styles from '../Navbar.module.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName={styles.active} exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
