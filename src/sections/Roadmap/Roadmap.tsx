import React from 'react';

import clsx from 'classnames';
import { Col, Row, Visible } from 'react-grid-system';

import * as styles from './Roadmap.module.scss';

import { Section } from '~components';
import { CheckedSection, getSectionData } from '~constants';

/**
 * A section that displays the roadmap of RisingSun
 *
 * @returns The `RoadmapSection` section
 */
export function RoadmapSection() {
  /** The data for the roadmap section */
  const sectionData = getSectionData<CheckedSection>('roadmap');
  const { columns } = sectionData;

  /**
   * A function that checks if a phase item has been completed
   * @param column The column to get the item from
   * @param item The item to use
   * @returns If the selected item has been completed
   */
  const hasPhaseItemCompleted = (column: string, item: string) =>
    columns[column][item] === true;

  return (
    <Row component="article" className={styles.section} justify="center">
      <Row className={styles.landscape}>
        <img
          className={styles.mountain}
          src="bg_mountain_4.svg"
          alt="Trailer section mountain"
        />
      </Row>
      <Row
        className={styles.content}
        justify="center"
        align="start"
        direction="column"
      >
        <Section id="roadmap">
          <h2 className={styles.title}>{sectionData.title}</h2>
          <Row className={styles.wrapper} justify="center">
            {Object.keys(columns).map((column, index) => (
              <Col
                key={column}
                className={styles.phase}
                xs={12}
                md={12 / Object.keys(columns).length}
              >
                <Visible xs sm>
                  <div
                    className={clsx(styles.spacer, {
                      [styles.hidden]: index === 0,
                    })}
                  />
                </Visible>
                <h3 className={styles.phaseTitle}>{column}</h3>
                <div className={styles.phaseContent}>
                  {Object.keys(columns[column]).map((item) => {
                    /** If the current phase item has been completed */
                    const hasCompleted = hasPhaseItemCompleted(column, item);

                    /** The number of the stroke to use */
                    let number = 3;
                    if (item.length > 15 && item.length < 25) number = 2;
                    if (item.length >= 25) number = 1;

                    return (
                      <p className={styles.phaseItem} key={item}>
                        <span className={styles.phaseText}>{item}</span>
                        {hasCompleted && (
                          <img
                            className={styles.phaseBackground}
                            src={`roadmap_stroke_${number}.svg`}
                            alt="The phase item background"
                            width={item.length * 10}
                          />
                        )}
                        <img
                          className={styles.phaseCheck}
                          src={
                            hasCompleted
                              ? 'roadmap_checked.svg'
                              : 'roadmap_unchecked.svg'
                          }
                          alt={`The roadmap item is ${
                            hasCompleted ? '' : 'not'
                          } completed`}
                        />
                      </p>
                    );
                  })}
                </div>
              </Col>
            ))}
          </Row>
        </Section>
      </Row>
    </Row>
  );
}
