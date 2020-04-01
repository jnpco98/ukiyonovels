import React, { useEffect } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment, useRefetch } from 'relay-hooks';

import { novelThumbnailCarousel_novels$key } from '../../../__generated__/novelThumbnailCarousel_novels.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';

import { Settings } from 'react-slick';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import { homeRelayQuery } from '../../template/home';

const DEFAULT_SORT = 'lastModified';
const DEFAULT_COUNT = 5;

export const DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES = {
  novelThumbnailCarouselSort: DEFAULT_SORT, 
  novelThumbnailCarouselCount: DEFAULT_COUNT
}

const fragmentSpec = graphql`
  fragment novelThumbnailCarousel_novels on Query {
    novels (
      first: $novelThumbnailCarouselCount
      sortKey: $novelThumbnailCarouselSort
    ) @connection(key: "novelThumbnailCarousel_novels") {
      edges {
        node {
          id
          slug
          ...novelThumbnail_novel
        }
      }
    }
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
  const { className, headingText } = props;
  const [{ novels }, refetch] = useRefetch(fragmentSpec, props.novels);
  
  const refetchHandler = () => {
    refetch(homeRelayQuery, { 
      novelThumbnailCarouselSort: 'lastModified', novelThumbnailCarouselCount: 20 
    }, null, null);
  }
  
  /* eslint-disable react/jsx-props-no-spreading */
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
