import * as React from 'react';

import { NAVIGATION_LINKS } from '~constants';
import { parseElementId } from '~util';

function IndexPage() {
  return (
    <main>
      <title>RisingSun | Stay Updated</title>
      {NAVIGATION_LINKS.map((link, index) => (
        <section
          key={link.link}
          id={parseElementId(link.link)}
          style={{
            backgroundColor: `rgba(0,0,0,${(index + 1) / 5})`,
            color: 'red',
            height: 1000,
          }}
        >
          Section: {link.name}
        </section>
      ))}
    </main>
  );
}

export default IndexPage;
