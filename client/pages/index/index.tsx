import React from 'react';
import styled from 'styled-components';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import CardCarousel from '@components/organism/CardCarousel';
import CardList from '@components/organism/CardList';
import SidePanel from '@components/organism/SidePanel';
import { t } from '@utilities/locales';
import * as M from '@utilities/media';
import { Responsive } from '@utilities/mixins';

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

const MainLayout = styled(Layout).attrs({ main: true })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    width: 100%;
  }

  ${M.MEDIA_MEDIUM} {
    flex-direction: row;

    & > *:nth-child(1) {
      width: 65%;
    }

    & > *:nth-child(2) {
      width: 35%;
    }
  }
`;

const TopNovels = styled(CardCarousel)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;

  ${M.MEDIA_MEDIUM} {
    margin-top: 2rem;
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

const cardResponsive: Responsive = {
  itemsPerRow: 2,
  gap: 0.2,
  breakpoints: {
    [M.MEDIA_XXSMALL]: {
      itemsPerRow: 3,
      gap: 0.4
    },
    [M.MEDIA_SMALL]: {
      itemsPerRow: 4,
      gap: 0.7
    }
  }
}

const wideCardResponsive: Responsive = {
  itemsPerRow: 1,
  gap: 0.2,
  breakpoints: {
    [M.MEDIA_XXSMALL]: {
      itemsPerRow: 2,
      gap: 0.4
    },
    [M.MEDIA_SMALL]: {
      itemsPerRow: 2,
      gap: 0.7
    }
  }
}

function Index() {
  const { topNovels, latestReleases, newNovels } = t('homepage');

  return(
    <Page>
      <MainLayout navOffset>
        <Layout gutterRight>
          <TopNovels heading={topNovels.heading} contents={cardParams(20)}/>
          <LatestReleases heading={latestReleases.heading} contents={cardParams(6)} cardType='wide' responsive={wideCardResponsive}/>
          <NewNovels heading={newNovels.heading} contents={cardParams(20)}/>
        </Layout>
        <SidePanel/>
      </MainLayout>
    </Page>
  );
}

export default Index;