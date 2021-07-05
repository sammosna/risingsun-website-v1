import React from 'react';

import { Row } from 'react-grid-system';

import * as styles from './Trailer.module.scss';

import { Section } from '~components';
import { getSiteLink } from '~constants';

/**
 * A section that displays information about the trailer
 *
 * @returns The `TrailerSection` section
 */
export function TrailerSection() {
  /** The link which is being used by the trailer */
  const trailerLink = getSiteLink('trailer');

  return (
    <Row component="article" className={styles.section}>
      <Row className={styles.landscape}>
        <img
          className={styles.mountain}
          src="bg_mountain_3.svg"
          alt="Trailer section mountain"
        />
        <img
          className={styles.warrior}
          src="bg_warrior_2.svg"
          alt="Warrior on mountain"
        />
      </Row>
      <Row
        className={styles.content}
        justify="center"
        align="start"
        direction="column"
      >
        <Section id="watch-the-trailer">
          <h2 className={styles.title}>Watch the trailer</h2>
          <iframe
            className={styles.trailer}
            src={trailerLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Section>
      </Row>
    </Row>
  );
}
