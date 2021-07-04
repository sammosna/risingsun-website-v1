import {
  IconHoldersAnimation,
  IconReflectAnimation,
  IconTaxAnimation,
} from './animation-list';

/**
 * A type that describes how an animation mapping should be structured
 */
type AnimationMap = {
  [key: string]: Record<string, any>;
};

/**
 * A mapping of original icons with their animated versions
 */
const ANIMATION_MAPPING: AnimationMap = {
  'icon_hodl.svg': IconHoldersAnimation,
  'icon_reduced_tax.svg': IconTaxAnimation,
  'icon_auto_liq.svg': IconReflectAnimation,
};

/**
 * A function that gets the animated version of an icon
 * @param iconPath The icon path to get an animated version from
 * @returns The animated version file of the submitted icon
 */
export const getAnimatedIcon = (iconPath: string): Record<string, any> => {
  const animation = ANIMATION_MAPPING[iconPath];
  return animation;
};
