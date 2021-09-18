import React from 'react';

import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row } from 'react-grid-system';

import * as styles from './Footer.module.scss';

import { CONTRACTS } from '~constants';

/**
 * A section that displays information in the footer
 *
 * @returns The `FooterSection` section
 */
export function FooterSection() {
  /**
   * A function that handles the copying
   * @param address The address to copy
   */
  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  return (
    <Row component="article" className={styles.section}>
      <Row className={styles.landscape}>
        <img
          className={styles.mountain}
          src="bg_mountain_7.svg"
          alt="Footer section mountain"
        />
      </Row>
      <Row
        className={styles.content}
        justify="center"
        align="start"
        direction="column"
      >
        <Container className={styles.container}>
          <h2>Official contract addresses</h2>
          {CONTRACTS.map((contract) => (
            <div className={styles.contractItem}>
              <h4>
                {contract.name} {contract.ticker && `(${contract.ticker})`}
              </h4>
              <p>
                {contract.address}{' '}
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faCopy}
                  onClick={() => handleCopy(contract.address)}
                />
              </p>
            </div>
          ))}
          <ul />
        </Container>
      </Row>
    </Row>
  );
}
