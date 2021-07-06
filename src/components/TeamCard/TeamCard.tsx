import React from 'react';

import * as styles from './TeamCard.module.scss';

/**
 * The property types which are used by the `TeamCard` component
 */
interface Props {
  avatarPath: string;
  name: string;
  job: string;
  description: string[];
}

/**
 * A component that displays information about a team member
 *
 * @param avatarPath The path to the avatar
 * @param name The name of the team member
 * @param job The job of the team member
 * @param description The description of the team member
 *
 * @returns The `TeamCard` component
 */
export function TeamCard({ avatarPath, name, job, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={`avatar/${avatarPath}.png`}
          alt={`${name}'s Avatar`}
        />
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.job}>{job}</h4>
        <span className={styles.content}>
          {description.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
}
