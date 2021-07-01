import * as React from 'react';

import { Row } from 'react-grid-system';

import * as styles from './Jumbotron.module.scss';

/**
 * The amount of background circles which are supported
 */
const backgroundCircles = [1, 2, 3, 4, 5, 6] as const;

/**
 * A component that displays the logo with circles around
 *
 * @returns The `Jumbotron` component
 */
export function Jumbotron() {
  return (
    <Row component="header" className={styles.jumbotron}>
      <Row className={styles.circles} justify="center" align="center">
        <img className={styles.logo} src="rsun_logo.svg" alt="Risingsun Logo" />
        {backgroundCircles.map((num) => (
          <img
            key={num}
            className={styles.circle}
            src={`bg_circle_${num}.svg`}
            alt={`Circle ${num}`}
          />
        ))}
      </Row>
      <Row className={styles.landscape}>
        <img
          className={styles.tori}
          src="bg_tori_1.svg"
          alt="Gray small tori"
        />
        <img
          className={styles.warrior}
          src="bg_warrior_1.svg"
          alt="Gray small warrior"
        />
        <img
          className={styles.mountain}
          src="bg_mountain_1.svg"
          alt="Gray mountain"
        />
      </Row>
    </Row>
  );
}
