import React from 'react';

import { Container, Row } from 'react-grid-system';

import * as styles from './Engine.module.scss';

import { Section } from '~components';
import { BasicSection, getSectionData } from '~constants';
import { ScreenSizes, useIsScreenBelowEq } from '~hooks';

/**
 * A section that shows information about the samurai engine in a custom card
 *
 * @returns The `EngineSection` section
 */
export function EngineSection() {
  /** The data for the engine section */
  const sectionData = getSectionData<BasicSection>('engine');

  /** If the screen is small - used to apply responsive effects */
  const isScreenSmall = useIsScreenBelowEq(ScreenSizes.ExtraSmall);

  return (
    <Section id={sectionData.id}>
      <Container className={styles.section} fluid>
        <h2 className={styles.title}>{sectionData.title}</h2>
        <Row className={styles.wrapper} justify="center">
          <div
            className={styles.card}
            style={{
              backgroundImage: isScreenSmall ? 'none' : undefined,
              padding: isScreenSmall ? 20 : undefined,
            }}
          >
            <h3 className={styles.subtitle}>{sectionData.subtitle}</h3>
            <div
              className={styles.content}
              style={{ width: isScreenSmall ? '100%' : undefined }}
            >
              {sectionData.description.map((line) => (
                <p className={styles.line}>{line}</p>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </Section>
  );
}
