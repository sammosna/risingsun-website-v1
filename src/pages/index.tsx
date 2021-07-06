import React from 'react';

import { Jumbotron } from '~components';
import {
  InfoSection,
  RoadmapSection,
  TeamSection,
  TrailerSection,
} from '~sections';

/**
 * A page that displays the visitor content on their first visit
 *
 * @returns The `IndexPage` page
 */
function IndexPage() {
  return (
    <>
      <title>RisingSun | Stay Updated</title>
      <Jumbotron />
      <InfoSection />
      <TrailerSection />
      <RoadmapSection />
      <TeamSection />
    </>
  );
}

export default IndexPage;
