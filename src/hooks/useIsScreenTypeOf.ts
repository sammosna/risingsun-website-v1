import { useScreenClass } from 'react-grid-system';

import { ScreenSizes } from './types';

/**
 * A hook that checks if a screen size
 * @param screenSizes The screen sizes to compare the current screen with
 * @returns If the current screen size is type of the given sizes
 */
export function useIsScreenTypeOf(screenSizes: ScreenSizes[]): boolean {
  /**
   * The screen class hook
   */
  const screenClass = useScreenClass();

  /**
   * If the screen is a type of the given screentypes
   */
  const isScreenTypeOf = screenSizes.some((size) => screenClass === size);

  /**
   * Returns if the screen size is a type of the given screen sizes
   */
  return isScreenTypeOf;
}
