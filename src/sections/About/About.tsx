import * as React from 'react';

import { Section } from '~components';
import { BasicSection, getSectionData } from '~constants';

export function AboutSection() {
  const welcomeSectionData = getSectionData<BasicSection>('welcome');
  const engineSectionData = getSectionData<BasicSection>('engine');

  return (
    <>
      <Section id={welcomeSectionData.id}>
        <h1>{welcomeSectionData.title}</h1>
      </Section>
      <Section id={engineSectionData.id}>
        <h1>{engineSectionData.title}</h1>
      </Section>
    </>
  );
}
