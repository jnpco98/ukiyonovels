import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';

import NovelCardList from '../../organism/novel-card-list';
import * as S from './style';

import { homepage } from '../../../settings/config/settings.json';
import { RouteComponentProps } from 'react-router-dom';
import { homeQuery } from '../../../__generated__/homeQuery.graphql';
import Loader, { LoaderType } from '../../atom/loaders';
import { DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES } from '../../organism/novel-thumbnail-carousel';

export const homeRelayQuery = graphql`
  query homeQuery(
    $novelThumbnailCarouselSort: String
    $novelThumbnailCarouselCount: Float
  ) {
    ...novelThumbnailCarousel_novels
    latestReleases: novels(
      first: 20
      sortKey: "lastModified"
    ) @connection(key: "home_latestReleases") {
      ...novelCardList_novels
      edges {
        node {
          slug
        }
      }
    }
  }
`;

const defaultVariables = {
  ...DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES
};

type Props = {} & RouteComponentProps;

function Home(props: Props) {
  const { props: relayProps, error, retry } =  useQuery<homeQuery>(homeRelayQuery, defaultVariables);

  if(error) return <div>{(() => { console.error(error) ;return error.message})()}</div>
  if(relayProps) {
    const { latestReleases } = relayProps;

    return (
      <>
        <S.HomeBanner contents={homepage.heroBanner} />
        <S.HomeContainer>
          <S.HomeWrapper>
            <S.HomeNovelThumbnailCarousel
              headingText={homepage.featuredNovels.headingText}
              novels={relayProps as any}
            />
            <NovelCardList
              headingText={homepage.latestRelease.headingText}
              buttonText={homepage.latestRelease.actionButtonText}
              novels={latestReleases as any}
            />
          </S.HomeWrapper>
          <S.HomeSidePanel />
        </S.HomeContainer>
      </>
    );
  }

  return <Loader type={LoaderType.Ring}/>

}

export default Home;
