import * as React from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
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

  /**
   * If the screen is small enough to make the container fluid
   */
  const shouldBeFluid = useScreenSize(ScreenSizes.Medium);

  /**
   * If the screen is small enough that short words should be used to prevent screen overflow
   */
  const shouldUseShortWords = ['md', 'lg'].some((size) => screenClass === size);

  return (
    <nav className={styles.root}>
      <Container className={styles.navbar} fluid={shouldBeFluid}>
        <Row justify="between" align="center" className={styles.content}>
          <Link to="/#" className={styles.homeButton}>
            <Row className={styles.logo} align="center">
              <StaticImage
                className={styles.image}
                src="../../assets/rsun_logo.svg"
                alt="RisingSun logo"
                placeholder="tracedSVG"
                layout="fixed"
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
                    {shouldUseShortWords ? getLastWord(link.name) : link.name}
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
