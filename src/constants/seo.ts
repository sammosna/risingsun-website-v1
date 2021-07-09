import seo from '../../content/website/seo.json';

/**
 * All the SEO data which is available
 */
export const SEO = seo;

/**
 * Gets the value of an SEO item which can be requested by a key
 * @param key The key of the SEO value to retrieve
 * @returns The value of the requested SEO item
 */
export const getSeoValue = (key: keyof typeof SEO) => {
  const value = SEO[key];

  if (value) return value;

  throw new Error('This SEO type has not been implemented!');
};
