import React from 'react';

import { faTelegramPlane as telegramIcon } from '@fortawesome/free-brands-svg-icons';
import { faTasks as presaleIcon } from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-grid-system';

import * as styles from './About.module.scss';

import { Button, Section } from '~components';
import { BasicSection, getSectionData, getSiteLink } from '~constants';
import { openInNewTab } from '~util';

/**
 * A section that displays information about RisingSun with some buttons
 *
 * @returns The `AboutSection` section
 */
export function AboutSection() {
  /** The data for the about section */
  const sectionData = getSectionData<BasicSection>('about');

  /** A function that handles the clicking of the presale button */
  const handlePresaleClick = () => openInNewTab(getSiteLink('presale'));

  /** A function that handles the clicking of the telegram button */
  const handleTelegramClick = () => openInNewTab(getSiteLink('telegram'));

  return (
    <Section id={sectionData.id}>
      <Container className={styles.section}>
        <h1 className={styles.heading}>{sectionData.title}</h1>
        <h2 className={styles.subtitle}>{sectionData.subtitle}</h2>
        <Row justify="center" align="center" className={styles.actions}>
          <Button icon={presaleIcon} onClick={handlePresaleClick}>
            Presale Whitelist
          </Button>
          <Button
            variant="secondary"
            icon={telegramIcon}
            onClick={handleTelegramClick}
          >
            Telegram
          </Button>
        </Row>
        <span className={styles.paragraph}>
          {sectionData.description.map((line) => (
            <p key={line} className={styles.line}>
              {line}
            </p>
          ))}
        </span>
      </Container>
    </Section>
  );
}
