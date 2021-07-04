import React from 'react';

import { Container, Col, Row } from 'react-grid-system';

import * as styles from './Rewards.module.scss';

import { Section, VerticalCard } from '~components';
import { CardSection, getSectionData } from '~constants';

export function RewardsSection() {
  /** The data for the rewards section */
  const sectionData = getSectionData<CardSection>('rewards');

  return (
    <Section id={sectionData.id}>
      <h2 className={styles.title}>{sectionData.title}</h2>
      <Container className={styles.container}>
        <Row justify="center" align="stretch">
          {sectionData.items.map((item) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              key={item.title}
              className={styles.column}
            >
              <VerticalCard
                iconPath={item.icon}
                title={item.title}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
