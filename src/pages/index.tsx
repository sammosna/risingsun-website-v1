import React from 'react';

import { Jumbotron } from '~components';
import { InfoSection } from '~sections';

/**
 * A page that displays the visitor content on their first visit
 *
 * @returns The `IndexPage` page
 */
function IndexPage() {
  return (
    <main>
      <title>RisingSun | Stay Updated</title>
      <Jumbotron />
      <InfoSection />
    </main>
  );
}

export default IndexPage;
