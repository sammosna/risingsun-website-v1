import * as React from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import {
  Row,
  Container,
  Hidden,
  Visible,
  useScreenClass,
} from 'react-grid-system';

import * as styles from './Navbar.module.scss';

import { NAVIGATION_LINKS } from '~constants';
import { useScreenSize, ScreenSizes } from '~hooks';
import { getLastWord } from '~util';

/**
 * A component that shows navigation options at the top of the page
 *
 * @returns The `Navbar` component
 */
export function Navbar() {
  const screenClass = useScreenClass();

  /** If the screen is small enough to make the container fluid */
  const isScreenSmall = useScreenSize(ScreenSizes.Medium);

  /** If the screen is small enough that short words should be used to prevent screen overflow  */
  const isScreenMediumOrLarge = [ScreenSizes.Medium, ScreenSizes.Large].some(
    (size) => screenClass === size,
  );

  return (
    <nav className={styles.navbar}>
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
          <Hidden xs sm>
            <Row component="ul" className={styles.links}>
              {NAVIGATION_LINKS.map((link) => (
                <li className={styles.linkItem} key={link.name}>
                  <Link
                    state={{ fromFeed: true }}
                    className={styles.link}
                    to={link.link}
                  >
                    {isScreenMediumOrLarge ? getLastWord(link.name) : link.name}
                  </Link>
                </li>
              ))}
            </Row>
          </Hidden>
          <Visible xs sm>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </Visible>
        </Row>
      </Container>
    </nav>
  );
}
