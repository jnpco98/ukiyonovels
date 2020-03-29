import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery, useRefetch } from 'relay-hooks';

import NovelCardList from '../../organism/novel-card-list';
import * as S from './style';

import { homepage } from '../../../settings/config/settings.json';
import { RouteComponentProps } from 'react-router-dom';
import { homeQuery } from '../../../__generated__/homeQuery.graphql';
import Loader, { LoaderType } from '../../atom/loaders';

export const homeRelayQuery = graphql`
  query homeQuery($featuredCarouselSort: String) {
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

type Props = {} & RouteComponentProps;

function Home(props: Props) {
  const DEFAULT_FEATURED_SORT = 'lastModified';

  const { props: relayProps, error, retry } =  useQuery<homeQuery>(homeRelayQuery, { featuredCarouselSort: DEFAULT_FEATURED_SORT }, { fetchPolicy: "network-only" });
  console.log('homeprops',relayProps)
  
  if(error) return <div>{error.message}</div>
  if(relayProps) {
    // const { , latestReleases } = relayProps;

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
              novels={relayProps.latestReleases as any}
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
