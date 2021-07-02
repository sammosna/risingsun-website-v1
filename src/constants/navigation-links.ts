import navigationLinks from '../../content/website/navigation-links.json';

/**
 * The way a link item should be structured
 */
type LinkItem = {
  name: string;
  link: string;
};

/**
 * A list of links that should be used for navigation
 */
export const NAVIGATION_LINKS: LinkItem[] = navigationLinks;

/**
 * The type of a link item
 */
export enum LinkItemType {
  SCROLL,
  REDIRECTION,
}
