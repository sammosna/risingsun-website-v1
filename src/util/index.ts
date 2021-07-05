/**
 * Parses a navigation link id to a html id
 * @param id The id of the link to parse
 * @returns The parsed version of the link id
 */
export const parseElementId = (id: string) => id.replace('#', '');

/**
 * Gets the last word from a piece of text
 * @param text The text to get the word from
 * @returns The last word from the given text
 */
export const getLastWord = (text: string) => {
  const words = text.split(/\s/);
  return words[words.length - 1];
};

/**
 * Opens a link in a new tab
 * @param url The link to open
 */
export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

/**
 * Generates a number between two numbers
 * @param start The number to start with
 * @param end The number to range to
 * @returns A number between the start and end number
 */
export const getNumberBetween = (start: number, end: number) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * A function that checks if a link is external
 * @param link The link to check
 * @returns If the link is external
 */
export const isExternalLink = (link: string) => link.includes('://');
