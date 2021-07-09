import React from 'react';

import Helmet from 'react-helmet';

import { Jumbotron } from '~components';
import { getSeoValue, SEO } from '~constants';
import {
  InfoSection,
  RoadmapSection,
  TeamSection,
  TokenomicsSection,
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
      <Helmet>
        <title>RisingSun | What Falls — Must Rise Again</title>
        {Object.keys(SEO).map((key: any) => (
          <meta name={key} content={getSeoValue(key)} />
        ))}
      </Helmet>

      <Jumbotron />
      <InfoSection />
      <TokenomicsSection />
      <TrailerSection />
      <RoadmapSection />
      <TeamSection />
    </>
  );
}

export default IndexPage;
