import React from 'react';
import Standard from '@layout/Standard';
import Banner from '@components/organism/Banner';
import { home } from '@settings';

function Index() {
  return (
    <Standard>
      <Banner contents={home.bannerContent} />
    </Standard>
  );
}

export default Index;
