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
  list?: boolean;
}

/**
 * A component that displays some information in a card
 *
 * @param iconPath The path to the icon
 * @param title The title of the card
 * @param description The description of the card
 * @param list If the items in there should be treated as a list
 *
 * @returns The `VerticalCard` component
 */
export function VerticalCard({ iconPath, title, description, list }: Props) {
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
          <img className={styles.image} src={iconPath} alt={iconPath} />
        )}
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.content}>
          {description.map((paragraph) =>
            list ? (
              <li key={paragraph} className={styles.paragraph}>
                {paragraph}
              </li>
            ) : (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ),
          )}
        </span>
      </div>
    </div>
  );
}

/**
 * The default property values which are used by the `VerticalCard` component
 */
VerticalCard.defaultProps = {
  list: false,
};
