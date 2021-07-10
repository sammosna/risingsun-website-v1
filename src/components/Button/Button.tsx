import React, { ReactNode, MouseEventHandler, HTMLAttributes } from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'classnames';

import * as styles from './Button.module.scss';

/**
 * The variants of the button which are accepted
 */
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'telegram'
  | 'bogged'
  | 'pancakeswap';

/**
 * The property types which are used by the `Button` component
 */
interface Props {
  variant?: ButtonVariant;
  image?: string;
  icon?: IconDefinition;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: HTMLAttributes<HTMLButtonElement>['className'];
}

/**
 * A component that handles user click action
 *
 * @param children The child elements to display
 * @param className The class name to assign to the button
 * @param icon The icon to use (FontAwesome)
 * @param image The url of the image to use (local/remote)
 * @param onClick The action to execute on button click
 * @param variant The variant of the button to display
 *
 * @returns The `Button` component
 */
export function Button({
  children,
  className,
  icon,
  image,
  onClick,
  variant,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(className, styles.button, {
        [styles.secondary]: variant === 'secondary',
        [styles.telegram]: variant === 'telegram',
        [styles.bogged]: variant === 'bogged',
        [styles.pancakeswap]: variant === 'pancakeswap',
      })}
      onClick={onClick}
    >
      {image && <img className={styles.image} src={image} alt="Button icon" />}
      {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
      <span className={styles.text}>{children}</span>
    </button>
  );
}

/**
 * The default property values which are used by the `Button` component
 */
Button.defaultProps = {
  variant: 'primary',
  icon: undefined,
  image: undefined,
  className: undefined,
  onClick: () => {},
};
