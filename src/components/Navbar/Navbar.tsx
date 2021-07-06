import React from 'react';

import {
  faBars as SidebarClosedIcon,
  faTimes as SidebarOpenIcon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'classnames';
import { Link } from 'gatsby';
import { Row, Container, Hidden, Visible } from 'react-grid-system';

import * as styles from './Navbar.module.scss';

import { NAVIGATION_LINKS } from '~constants';
import { useIsScreenBelowEq, ScreenSizes } from '~hooks';
import { getLastWord, isExternalLink } from '~util';

/**
 * The property types which are used by the `Navbar` component
 */
interface Props {
  isSidebarOpen: boolean;
  sidebarOpenAction: () => void;
  sidebarCloseAction: () => void;
}

/**
 * A component that shows navigation options at the top of the page
 *
 * @param isSidebarOpen If the sidebar is currently open
 * @param sidebarOpenAction The action to execute on sidebar open
 * @param sidebarCloseAction The action to execute on sidebar close
 *
 * @returns The `Navbar` component
 */
export function Navbar({
  isSidebarOpen,
  sidebarOpenAction,
  sidebarCloseAction,
}: Props) {
  /** If the screen is small enough to make the container fluid */
  const isScreenSmall = useIsScreenBelowEq(ScreenSizes.Medium);

  return (
    <nav
      className={clsx(styles.navbar, {
        [styles.shadow]: isSidebarOpen,
      })}
    >
      <Container className={styles.wrapper} fluid={isScreenSmall}>
        <Row justify="between" align="center" className={styles.content}>
          <Link to="/#" className={styles.homeButton}>
            <Row className={styles.logo} align="center">
              <img
                className={styles.image}
                src="rsun_logo.svg"
                alt="RisingSun logo"
                width={40}
                height={40}
              />
              <span className={styles.name}>$RSUN</span>
            </Row>
          </Link>
          <Hidden xs sm md>
            <Row component="ul" className={styles.links}>
              {NAVIGATION_LINKS.map((link) => (
                <li className={styles.linkItem} key={link.name}>
                  {isExternalLink(link.link) ? (
                    <a
                      className={styles.link}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getLastWord(link.name)}
                    </a>
                  ) : (
                    <Link className={styles.link} to={link.link}>
                      {getLastWord(link.name)}
                    </Link>
                  )}
                </li>
              ))}
            </Row>
          </Hidden>
          <Visible xs sm md>
            <FontAwesomeIcon
              icon={SidebarClosedIcon}
              size="2x"
              className={clsx(styles.toggler, styles.togglerClosed, {
                [styles.togglerApplied]: isSidebarOpen,
              })}
              onClick={sidebarOpenAction}
            />
            <FontAwesomeIcon
              icon={SidebarOpenIcon}
              size="2x"
              className={clsx(styles.toggler, styles.togglerOpen, {
                [styles.togglerApplied]: isSidebarOpen,
              })}
              onClick={sidebarCloseAction}
            />
          </Visible>
        </Row>
      </Container>
    </nav>
  );
}
