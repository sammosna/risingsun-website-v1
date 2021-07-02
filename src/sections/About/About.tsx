import * as React from 'react';

import { Container, Row } from 'react-grid-system';

import * as styles from './About.module.scss';

import { Section } from '~components';
import { BasicSection, getSectionData } from '~constants';

export function AboutSection() {
  const welcomeSectionData = getSectionData<BasicSection>('welcome');
  const engineSectionData = getSectionData<BasicSection>('engine');

  return (
    <Row component="article" className={styles.aboutSection}>
      <Row className={styles.landscape}>
        <img
          className={styles.katana}
          src="bg_katana.svg"
          alt="Katana on mountain"
        />
        <img
          className={styles.mountain}
          src="bg_mountain_2.svg"
          alt="About section mountain"
        />
      </Row>
      <Row
        className={styles.content}
        justify="center"
        align="start"
        direction="column"
      >
        <Section id={welcomeSectionData.id}>
          <Container>
            <Row justify="center" direction="column">
              <h1 className={styles.heading}>{welcomeSectionData.title}</h1>
              <h3 className={styles.subtitle}>Slogan Slogan Slogan</h3>
            </Row>
          </Container>
        </Section>
      </Row>
    </Row>
  );
}
