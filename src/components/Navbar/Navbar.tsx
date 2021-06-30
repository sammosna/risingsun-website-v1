import * as React from 'react';

import { Link } from 'gatsby';

import * as styles from './Navbar.module.scss';

import { NAVIGATION_LINKS } from '~constants';

/**
 * A component that shows navigation options at the top of the page
 *
 * @returns The `Navbar` component
 */
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        {NAVIGATION_LINKS.map((link) => (
          <li className={styles.link} key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
