import React, { ReactElement } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';

import { RouteComponentProps } from 'react-router-dom';
import NovelCardList, { DEFAULT_NOVEL_CARD_LIST_VARIABLES } from '../../organism/novel-card-list';
import * as S from './style';

import { homepage } from '../../../settings/config/settings.json';
import { homeQuery } from '../../../__generated__/homeQuery.graphql';
import Loader, { LoaderType } from '../../atom/loaders';
import { DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES } from '../../organism/novel-thumbnail-carousel';
import { sidePanel_aggregates$key } from '../../../__generated__/sidePanel_aggregates.graphql';

// primary secondary tertiary for graphql with just argument diff
export const homeRelayQuery = graphql`
  query homeQuery(
    $novelThumbnailCarouselSort: String
    $novelThumbnailCarouselCount: Float
    $novelsCount: Float
    $novelsSort: String
    $novelWhere: NovelWhere
    $novelReverse: Boolean
    $novelAfter: String
  ) {
    ...novelThumbnailCarousel_default
    ...novelThumbnailCarousel_latest
    ...novelCardList_novels
  }
`;

const defaultVariables = {
  ...DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES,
  ...DEFAULT_NOVEL_CARD_LIST_VARIABLES
};

type Props = {
  appData: sidePanel_aggregates$key;
} & RouteComponentProps;

function Home(props: Props): ReactElement {
  const { appData } = props;
  const { props: relayProps, error, retry } = useQuery<homeQuery>(homeRelayQuery, defaultVariables);

  const width = 200;
  if (error) return <div>{error.message}</div>;
  if (relayProps) {
    return (
      <>
        <S.HomeBanner contents={homepage.heroBanner} />
        <div style={{ padding: '5rem', background: '#3b0087', width: '100%', height: '500px' }}>
          <S.TestCard>
            <div className="card__content">
              <a href="/">
                <div className="card__content-image" />
              </a>
              <div className="card__content-details">
                <p className="card__content-details__title">
                  <a href="/">Selector</a>
                </p>
                <p className="card__content-details__title">
                  <a href="/">
                    MA15+ <span className="is-dot-item" />
                    2014 <span className="is-dot-item" />
                    24 Episodes
                  </a>
                </p>
                <p className="card__content-details__title">
                  <span className="is-snippet">Web Novel</span>
                  <span className="is-snippet">Chinese</span>
                </p>
              </div>
              <div className="card__content-details__reveal">
                <a className="card__content-details__reveal-content" href="/">
                  <span className="is-play-icon" />
                  Start Reading
                </a>
              </div>
            </div>
          </S.TestCard>
        </div>
        <S.HomeContainer>
          <S.HomeWrapper>
            <S.HomeNovelThumbnailCarousel
              headingText={homepage.featuredNovels.headingText}
              type="latest"
              novels={relayProps as any}
            />
            <S.HomeNovelThumbnailCarousel
              headingText={homepage.featuredNovels.headingText}
              type="featured"
              novels={relayProps as any}
            />
            <NovelCardList
              headingText={homepage.latestRelease.headingText}
              buttonText={homepage.latestRelease.actionButtonText}
              novelsKey={relayProps as any}
            />
          </S.HomeWrapper>
          <S.HomeSidePanel classifications={appData} enabledClassifications={['genres', 'status', 'tags', 'types']} />
        </S.HomeContainer>
      </>
    );
  }

  return <Loader type={LoaderType.Ring} />;
}

export default Home;
