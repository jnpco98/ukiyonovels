import React from 'react';
import Standard from '@layout/Standard';
import Banner from '@components/organism/Banner';
import { home } from '@settings';
import CardCarousel from '@components/organism/CardCarousel';

function Index() {
  return (
    <Standard>
      <Banner contents={home.bannerContent} backgroundBase="backgroundTertiary" />
      <CardCarousel />
    </Standard>
  );
}

export default Index;
