import sections from '../../content/website/sections.json';

/**
 * A type that describes what properties a section should at least contain
 */
type Section = {
  title: string;
  id: string;
};

/**
 * A type that describes how a basic section should be structured
 */
export type BasicSection = Section & {
  subtitle: string;
  description: string[];
};

/**
 * A type that describes how a section with card items should be structured
 */
export type CardSection = Section & {
  items: {
    icon: string;
    title: string;
    description: string[];
  }[];
};

/**
 * A type that describes how a checked items section (i.e. roadmap) should be structured
 */
export type CheckedSection = Section & {
  [key: string]: {
    description: string;
    checked: boolean;
  };
};

/**
 * The types of sections which are supported
 */
type SupportedSectionTypes = BasicSection | CardSection | CheckedSection;

/**
 * A collection of sections
 */
type SectionCollection = {
  [key: string]: SupportedSectionTypes;
};

/**
 * All the sections which are available for the website
 */
export const SECTIONS: SectionCollection = sections;

/**
 * Extracts data from the section given to the function
 * @param key The key of the section to get data from
 * @returns The data from the requested section
 */
export const getSectionData = <T extends SupportedSectionTypes>(
  key: string,
): T => {
  const section: T = SECTIONS[key] as T;

  if (section) return section;

  throw new Error('This section has not been implemented!');
};
