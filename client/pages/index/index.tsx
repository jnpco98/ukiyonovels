import React from 'react';
import styled from 'styled-components';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import CardCarousel from '@components/organism/CardCarousel';
import CardList, { Responsive } from '@components/organism/CardList';
import * as M from '@utilities/media';

function cardParams(cnt: number) {
  const thumbnail = `https://occ-0-2954-2568.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABcvEUXtNFRBthcDmFXo8Lhc4L10J5s2WVkm9ipP6V_9fM5Jl5x8mmacyTnR8pj_Y2ZM3gaiwontqaMdQh7gG4cdELHgbILEQzg.jpg`;
  const content = {
    heading: 'Kaguya-Sama: Love is War',
    inline: ['MA15+', '2014', '24Chs'],
    tabbed: ['Web Novel', 'Chinese'],
    thumbnail
  }

  return Array(cnt).fill(0).map(_ => content);
}

const Carousel = styled(CardCarousel)`
  ${M.MEDIA_MEDIUM} {
    width: 70%;
  }
`;

const cardResponsive: Responsive = {
  cardsPerRow: 2,
  breakpoints: {
    [M.MEDIA_XXSMALL]: 3,
    [M.MEDIA_SMALL]: 4
  }
}

const wideCardResponsive: Responsive = {
  cardsPerRow: 1,
  breakpoints: {
    [M.MEDIA_XXSMALL]: 2
  }
}

function Index() {
  return(
    <Page>
      <Layout>
        <CardList heading="Novels" contents={cardParams(20)} responsive={cardResponsive}/>
        <CardList heading="Novels" contents={cardParams(20)} cardType='wide' responsive={wideCardResponsive}/>
        <Carousel heading="Top Novels" contents={cardParams(20)}/>
      </Layout>
    </Page>
  );
}

export default Index;