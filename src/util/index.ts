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
