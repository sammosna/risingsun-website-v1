import React from 'react';

import clsx from 'classnames';

import * as styles from './VerticalCard.module.scss';

import { getAnimatedIcon } from '~animations';
import { Animate } from '~components';

/**
 * The property types which are used by the `VerticalCard` component
 */
interface Props {
  iconPath: string;
  title: string;
  description: string[];
}

/**
 * A component that displays some information in a card
 *
 * @param iconPath The path to the icon
 * @param title The title of the card
 * @param description The description of the card
 *
 * @returns The `VerticalCard` component
 */
export function VerticalCard({ iconPath, title, description }: Props) {
  /** The animation for the icon */
  const animation = getAnimatedIcon(iconPath);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        {animation ? (
          <Animate
            className={clsx(styles.image, {
              [styles.animated]: animation !== undefined,
            })}
            animation={animation}
          />
        ) : (
          <img
            className={styles.image}
            src={`icons/${iconPath}`}
            alt={iconPath}
          />
        )}
        <h3 className={styles.title}>{title}</h3>
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
