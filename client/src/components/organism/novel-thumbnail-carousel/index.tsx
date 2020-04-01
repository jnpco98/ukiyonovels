import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { novelThumbnailCarousel_novels$key } from '../../../__generated__/novelThumbnailCarousel_novels.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';

import { Settings } from 'react-slick';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';

const fragmentSpec = graphql`
  fragment novelThumbnailCarousel_novels on Query {
    novelThumbnailCarousel: novels(
      first: $novelThumbnailCarouselCount
      sortKey: $novelThumbnailCarouselSort
    ) @connection(key: "novel_novelThumbnailCarousel") {
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

const sliderOptions: Settings = {
  ...DEFAULT_SLIDER_SETTINGS,
  swipeToSlide: true,
  prevArrow: <S.InfoThumbnailCarouselArrow />,
  nextArrow: <S.InfoThumbnailCarouselArrow />,
  variableWidth: true,
  centerMode: false
};

const DEFAULT_SORT = 'lastModified';
const DEFAULT_COUNT = 20;

interface NovelThumbnailCarouselVariables {
  novelThumbnailCarouselSort: string;
  novelThumbnailCarouselCount: number;
}

export const DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES: NovelThumbnailCarouselVariables = {
  novelThumbnailCarouselSort: DEFAULT_SORT, 
  novelThumbnailCarouselCount: DEFAULT_COUNT
}

type Props = {
  novelThumbnailCarousel: novelThumbnailCarousel_novels$key;
  className?: string;
  headingText?: string;
};

function NovelThumbnailCarousel(props: Props) {
  const { className, headingText } = props;
  const { novelThumbnailCarousel } = useFragment(fragmentSpec, props.novelThumbnailCarousel);
  
  return (
    <S.NovelThumbnailCarouselContainer className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
      <S.NovelThumbnailCarouselSlider {...sliderOptions}>
        {novelThumbnailCarousel.edges.map(({ node }) => (
          <S.NovelThumbnailCarouselItem key={node.id} novel={node} />
        ))}
      </S.NovelThumbnailCarouselSlider>
    </S.NovelThumbnailCarouselContainer>
  );
}

export default NovelThumbnailCarousel;
