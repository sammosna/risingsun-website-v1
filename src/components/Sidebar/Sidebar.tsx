/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';

import clsx from 'classnames';
import { Link } from 'gatsby';

import * as styles from './Sidebar.module.scss';

import { NAVIGATION_LINKS } from '~constants';
import { ScreenSizes, useIsScreenTypeOf } from '~hooks';
import { getLastWord } from '~util';

/**
 * The property types which are used by the `Sidebar` component
 */
interface Props {
  open: boolean;
  closeAction: () => void;
}

/**
 * A component that displays navigation at the side of the screen
 *
 * @param open If the sidebar should be opened
 * @param closeAction The action to execute on sidebar close
 *
 * @returns The `Sidebar` component
 */
export function Sidebar({ open, closeAction }: Props) {
  /** If the sidebar should automatically close */
  const isScreenTypeAllowed = useIsScreenTypeOf([
    ScreenSizes.ExtraSmall,
    ScreenSizes.Small,
  ]);

  /** Handles the logic for automatically closing the sidebar based on screen size changing */
  useEffect(() => {
    if (!isScreenTypeAllowed) closeAction();
  }, [isScreenTypeAllowed]);

  return (
    <>
      <div
        className={clsx(styles.blur, { [styles.applied]: open })}
        onClick={closeAction}
      />
      <aside className={clsx(styles.sidebar, { [styles.open]: open })}>
        <ul className={styles.links}>
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.link} className={styles.linkItem}>
              <Link className={styles.link} to={link.link}>
                {getLastWord(link.name)}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
