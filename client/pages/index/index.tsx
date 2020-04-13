import React from 'react';
import Standard from '@layout/Standard';
import Banner from '@components/organism/Banner';
import { home } from '@settings';
import Card from '@components/molecule/Card';

function Index() {
  return (
    <Standard>
      <Banner contents={home.bannerContent} />
      <div style={{ width: '100%', background: 'purple' }}>
        <Card />
      </div>
    </Standard>
  );
}

export default Index;
