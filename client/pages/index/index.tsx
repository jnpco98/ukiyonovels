import React from 'react';
import Standard from '@layout/Standard';
import Banner from '@components/organism/Banner';
import { home } from '@settings';
import CardCarousel from '@components/organism/CardCarousel';
import ColumnCardList from '@components/organism/ColumnCardList';
import * as S from './style';

function Index() {
  return (
    <Standard>
      <Banner contents={home.bannerContent} backgroundBase="primary" />
      <S.CardCarouselSection>
        <CardCarousel />
      </S.CardCarouselSection>
      <S.ColumnCardListSection layout="primarySecondary">
        <ColumnCardList />
        <ColumnCardList />
      </S.ColumnCardListSection>
    </Standard>
  );
}

export default Index;
