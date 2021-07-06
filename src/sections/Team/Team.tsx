import React from 'react';

import { Col, Row } from 'react-grid-system';

import * as styles from './Team.module.scss';

import { TeamCard, Section } from '~components';
import { CardSection, getSectionData } from '~constants';

/**
 * A section that displays information about the team
 *
 * @returns The `TeamSection` section
 */
export function TeamSection() {
  /** The data for the team section */
  const sectionData = getSectionData<CardSection>('team');

  return (
    <Row component="article" className={styles.section} justify="center">
      <Row className={styles.landscape}>
        <img src="bg_mountain_5.svg" alt="Team section mountain" />
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
                lg={4}
              >
                <TeamCard
                  avatarPath={item.icon}
                  name={item.title}
                  job={item.subtitle || 'Admin'}
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
