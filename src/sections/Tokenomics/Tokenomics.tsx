import React from 'react';

import { Col, Row } from 'react-grid-system';

import * as styles from './Tokenomics.module.scss';

import { Section, VerticalCard } from '~components';
import { CardSection, getSectionData } from '~constants';

/**
 * A section that displays information about the tokenomics
 *
 * @returns The `TokenomicsSection` section
 */
export function TokenomicsSection() {
  /** The data for the tokenomics section */
  const sectionData = getSectionData<CardSection>('tokenomics');

  return (
    <Row component="article" className={styles.section} justify="center">
      <Row className={styles.landscape}>
        <img
          className={styles.mountain}
          src="bg_mountain_7.svg"
          alt="Team section mountain"
        />
      </Row>
      <Row
        className={styles.content}
        justify="center"
        align="start"
        direction="column"
      >
        <Section id={sectionData.id}>
          <h2 className={styles.title}>{sectionData.title}</h2>
          <Row justify="center" className={styles.columns}>
            {sectionData.items.map((item) => (
              <Col
                key={item.title}
                className={styles.column}
                xs={12}
                sm={6}
                md={4}
              >
                <VerticalCard
                  iconPath={`icons/${item.icon}`}
                  title={item.title}
                  description={item.description}
                />
              </Col>
            ))}
          </Row>
        </Section>
      </Row>
    </Row>
  );
}
