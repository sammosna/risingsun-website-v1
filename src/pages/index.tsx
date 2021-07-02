import * as React from 'react';

import { Jumbotron } from '~components';
import { AboutSection } from '~sections';

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
      <AboutSection />
    </main>
  );
}

export default IndexPage;
