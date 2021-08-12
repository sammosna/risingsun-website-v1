import React from 'react';

import { faTelegramPlane as telegramIcon } from '@fortawesome/free-brands-svg-icons';
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

  /** A function to handle the pancakeswap link opening */
  const handlePancakeSwapOpen = () => openInNewTab(getSiteLink('pancakeswap'));

  /** A function to handle the the bogged link opening */
  const handleBoggedSwapOpen = () => openInNewTab(getSiteLink('bogged'));

  /** A function to handle the telegram link opening */
  const handleTelegramOpen = () => openInNewTab(getSiteLink('telegram'));

  const handleNftOpen = () => openInNewTab(getSiteLink('nft'));

  return (
    <Section id={sectionData.id}>
      <Container className={styles.section}>
        <h1 className={styles.heading}>{sectionData.title}</h1>
        <h2 className={styles.subtitle}>{sectionData.subtitle}</h2>
        <Row justify="center" align="center" className={styles.actions}>
          <Button
            variant="pancakeswap"
            image="pcs_logo.png"
            onClick={handlePancakeSwapOpen}
          >
            PancakeSwap
          </Button>
          <Button
            variant="bogged"
            image="bs_logo.svg"
            onClick={handleBoggedSwapOpen}
          >
            Bogged
          </Button>
          <Button
            variant="telegram"
            icon={telegramIcon}
            onClick={handleTelegramOpen}
          >
            Telegram
          </Button>
        </Row>
        <div className={styles.slippage}>Set slippage to 10% when buying</div>
        <Row justify="center" align="center" className={styles.actions}>
          <Button variant="primary" onClick={handleNftOpen}>
            Launch SamuraiRising DApp
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
