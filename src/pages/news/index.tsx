import React, { ReactElement } from 'react';
import { breakpointTabletSmall } from '@hse-design/tokens';
import { Section } from '../../components/section';
import { NewsContainer } from '../../containers/news';

export const NewsPage = (): ReactElement => (
  <main className="mainRoot">
    <Section title="Блог" className="gap-v">
      <NewsContainer />
    </Section>
  </main>
);
