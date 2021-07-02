import React from 'react';

import { Row } from 'react-grid-system';

import * as styles from './Info.module.scss';

import { AboutSection } from '~sections';

/**
 * A section that contains multiple sections to display information
 *
 * @returns The `InfoSection` section
 */
export function InfoSection() {
  return (
    <Row component="article" className={styles.section}>
      <Row className={styles.landscape}>
        <img
          className={styles.katana}
          src="bg_katana.svg"
          alt="Katana on mountain"
        />
        <img
          className={styles.mountain}
          src="bg_mountain_2.svg"
          alt="Section mountain"
        />
      </Row>
      <Row
        className={styles.content}
        justify="center"
        align="start"
        direction="column"
      >
        <AboutSection />
      </Row>
    </Row>
  );
}
