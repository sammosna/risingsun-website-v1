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
        <title>RisingSun | Recruit, Battle, Earn & Rule</title>
        {Object.keys(SEO).map((type: any) => (
          <meta key={type} name={type} content={getSeoValue(type)} />
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
