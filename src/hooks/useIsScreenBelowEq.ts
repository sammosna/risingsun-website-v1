import { useScreenClass } from 'react-grid-system';

import { ScreenSizes } from './types';

/**
 * A hook that checks if the screen size is smaller than or equal to the given screen size
 * @param screenSize The screen size to check from
 * @returns If the screen size is within the given scope
 */
export function useIsScreenBelowEq(screenSize: ScreenSizes): boolean {
  /**
   * The screen class hook
   */
  const screenClass = useScreenClass();

  /**
   * All screen size items destructured
   */
  const [xs, sm, md, lg, xl, xxl] = Object.values(ScreenSizes);

  /**
   * An array which will be used for comparing
   */
  let comparator: string[] = [];

  /**
   * Set screen sizes based on given condition
   */
  switch (screenSize) {
    case ScreenSizes.ExtraSmall:
      comparator = [xs];
      break;
    case ScreenSizes.Small:
      comparator = [xs, sm];
      break;
    case ScreenSizes.Medium:
      comparator = [xs, sm, md];
      break;
    case ScreenSizes.Large:
      comparator = [xs, sm, md, lg];
      break;
    case ScreenSizes.ExtraLarge:
      comparator = [xs, sm, md, lg, xl];
      break;
    case ScreenSizes.ExtraExtraLarge:
      comparator = [xs, sm, md, lg, xl, xxl];
      break;
    default:
      break;
  }

  /**
   * Returns if the screen size matches the given condition
   */
  return comparator.some((size) => size === screenClass);
}
