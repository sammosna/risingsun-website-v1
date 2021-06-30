/**
 * Parses a navigation link id to a html id
 * @param id The id of the link to parse
 * @returns The parsed version of the link id
 */
export const parseElementId = (id: string) => id.replace('#', '');
