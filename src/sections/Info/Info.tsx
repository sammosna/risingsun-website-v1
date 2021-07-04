import React from 'react';

import { Row } from 'react-grid-system';

import katanaAnim from '../../animations/svg_katana.json';

import * as styles from './Info.module.scss';

import { Animate } from '~components';
import { AboutSection, EngineSection } from '~sections';

/**
 * A section that contains multiple sections to display information
 *
 * @returns The `InfoSection` section
 */
export function InfoSection() {
  return (
    <Row component="article" className={styles.section}>
      <Row className={styles.landscape}>
        <Animate className={styles.katana} animation={katanaAnim} />
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
        <EngineSection />
      </Row>
    </Row>
  );
}
