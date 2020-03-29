import React, { useEffect } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment, useRefetch } from 'relay-hooks';

import { novelThumbnailCarousel_novels$key } from '../../../__generated__/novelThumbnailCarousel_novels.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';

import { Settings } from 'react-slick';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import { homeRelayQuery } from '../../template/home';

// Only connection can be refetched
const fragmentSpec = graphql`
  fragment novelThumbnailCarousel_novels on Query {
    novels (
      first: 20
      sortKey: $featuredCarouselSort
    ) @connection(key: "novelThumbnailCarousel_novels") {
      # ...novelThumbnailCarousel_novels
      edges {
        node {
          id
          slug
          ...novelThumbnail_novel
        }
      }
    }
    # edges {
    #   node {
    #     id
    #     title
    #     ...novelThumbnail_novel
    #   }
    # }
  }
`;

type Props = {
  novels: novelThumbnailCarousel_novels$key;
  className?: string;
  headingText?: string;
};

const sliderOptions: Settings = {
  ...DEFAULT_SLIDER_SETTINGS,
  swipeToSlide: true,
  prevArrow: <S.InfoThumbnailCarouselArrow />,
  nextArrow: <S.InfoThumbnailCarouselArrow />,
  variableWidth: true,
  centerMode: false
};

function NovelThumbnailCarousel(props: Props) {
  // const { edges } = useFragment(fragmentSpec, props.novels);
  const { className, headingText } = props;
  const [{ novels }, refetch] = useRefetch(fragmentSpec, props.novels);
  console.log('refetcheddata', novels)
  /* eslint-disable react/jsx-props-no-spreading */

  
  const refetchHandler = () => {
    const response = refetch(homeRelayQuery, { featuredCarouselSort: 'year' }, null, null, { force: true, fetchPolicy: "network-only" });
    // response.dispose();
  }
  
  return (
    <S.NovelThumbnailCarouselContainer className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
      <button onClick={refetchHandler}>REFRESH CAROUSEL</button>
      <S.NovelThumbnailCarouselSlider {...sliderOptions}>
        {novels.edges.map(({ node }) => (
          <S.NovelThumbnailCarouselItem key={node.id} novel={node} />
        ))}
      </S.NovelThumbnailCarouselSlider>
    </S.NovelThumbnailCarouselContainer>
  );
  /* eslint-enable react/jsx-props-no-spreading */
}

export default NovelThumbnailCarousel;
