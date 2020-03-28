import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { home_root$key } from '../../../__generated__/home_root.graphql';

import NovelCardList from '../../organism/novel-card-list';
import * as S from './style';

import { homepage } from '../../../settings/config/settings.json';

const fragmentSpec = graphql`
  fragment home_root on Query {
    featured: novels(first: 20, sortKey: "lastModified")
      @connection(key: "home_featured") {
      ...novelThumbnailCarousel_novels
      edges {
        node {
          slug
        }
      }
    }
    latestReleases: novels(first: 20, sortKey: "lastModified")
      @connection(key: "home_latestReleases") {
      ...novelCardList_novels
      edges {
        node {
          slug
        }
      }
    }
  }
`;

type Props = {
  root: home_root$key;
};

function Home(props: Props) {
  const { featured, latestReleases } = useFragment(fragmentSpec, props.root);

  return (
    <>
      <S.HomeBanner contents={homepage.heroBanner} />
      <S.HomeContainer>
        <S.HomeWrapper>
          <S.HomeNovelThumbnailCarousel
            headingText={homepage.featuredNovels.headingText}
            novels={featured}
          />
          <NovelCardList
            headingText={homepage.latestRelease.headingText}
            buttonText={homepage.latestRelease.actionButtonText}
            novels={latestReleases}
          />
        </S.HomeWrapper>
        <S.HomeSidePanel />
      </S.HomeContainer>
    </>
  );
}

export default Home;
