import React from 'react';
import styled from 'styled-components';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import CardCarousel from '@components/organism/CardCarousel';
import * as M from '@utilities/media';

function cardParams(cnt: number) {
  const thumbnail = `https://occ-0-2954-2568.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABcvEUXtNFRBthcDmFXo8Lhc4L10J5s2WVkm9ipP6V_9fM5Jl5x8mmacyTnR8pj_Y2ZM3gaiwontqaMdQh7gG4cdELHgbILEQzg.jpg`;
  const content = {
    heading: 'Kaguya-Sama: Love is War',
    inline: ['MA15+', '2014', '24Chs'],
    tabbed: ['Web Novel', 'Chinese']
  }

  return Array(cnt).fill(0).map(_ => ({ thumbnail, content }));
}

const Carousel = styled(CardCarousel)`
  ${M.MEDIA_MEDIUM} {
    width: 70%;
  }
`;

function Index() {
  return(
    <Page>
      <Layout>
        <Carousel heading="Top Novels" cardContents={cardParams(20)}/>
      </Layout>
    </Page>
  );
}

export default Index;