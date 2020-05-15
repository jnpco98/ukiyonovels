import React from 'react';
import styled from 'styled-components';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import CardCarousel from '@components/organism/CardCarousel';
import CardList, { Responsive } from '@components/organism/CardList';
import * as M from '@utilities/media';
import List from '@components/molecule/List';

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

function generateList(cnt: number) {
  return Array(cnt).fill(0).map(_ => ({
    title: 'Kaguya-Sama: Love is War',
    subtitle: Math.floor(Math.random() * 4023) + 1,
    link: '/'
  }));
}

const TopNovels = styled(CardCarousel)`
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${M.MEDIA_MEDIUM} {
    margin-top: 4rem;
  }
`;

const NewNovels = styled(CardCarousel)`
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const LatestReleases = styled(CardList)`
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const SearchByGenre = styled(List)`
  margin: 0 auto;
  margin-bottom: 3rem;

  ${M.MEDIA_MEDIUM} {
    margin-top: 2rem;
  }
`;

const SearchByType = styled(List)`
  margin: 0 auto;
  margin-bottom: 3rem;
`;


const cardResponsive: Responsive = {
  cardsPerRow: 2,
  gap: 0.2,
  breakpoints: {
    [M.MEDIA_XXSMALL]: {
      cardsPerRow: 3,
      gap: 0.4
    },
    [M.MEDIA_SMALL]: {
      cardsPerRow: 4,
      gap: 0.7
    }
  }
}

const wideCardResponsive: Responsive = {
  cardsPerRow: 1,
  gap: 0.2,
  breakpoints: {
    [M.MEDIA_XXSMALL]: {
      cardsPerRow: 2,
      gap: 0.4
    },
    [M.MEDIA_SMALL]: {
      cardsPerRow: 2,
      gap: 0.7
    }
  }
}

function Index() {
  return(
    <Page>
      <Layout layoutType="primarySecondary" main>
        <Layout gutterRight>
          <TopNovels heading="Top Novels" contents={cardParams(20)}/>
          <LatestReleases heading="Latest Releases" contents={cardParams(6)} cardType='wide' responsive={wideCardResponsive}/>
          <NewNovels heading="New Novels" contents={cardParams(20)}/>
        </Layout>
        <Layout gutterLeft>
          <SearchByGenre heading="Search by Genre" contents={generateList(10)} bulleted/>
          <SearchByType heading="Search by Type" contents={generateList(10)} bulleted/>
        </Layout>
      </Layout>
    </Page>
  );
}

export default Index;