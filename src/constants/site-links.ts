import siteLinks from '../../content/website/site-links.json';

/**
 * All the allowed types of links
 */
type LinkType = keyof typeof siteLinks;

/**
 * The way a link collection should be structured
 */
type LinkCollection = {
  [key in LinkType]: string;
};

/**
 * An object which contains all site links
 */
export const SITE_LINKS: LinkCollection = siteLinks;

/**
 * Get a link from the site links configuration
 * @param linkType The type of the link to retrieve (i.e. 'presale', 'telegram', 'instagram')
 * @returns The link which matches the given key
 */
export const getSiteLink = (linkType: LinkType) => SITE_LINKS[linkType] || '/#';
