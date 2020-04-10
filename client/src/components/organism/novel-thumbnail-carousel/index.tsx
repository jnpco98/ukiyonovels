/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { Settings } from 'react-slick';
import { novelThumbnailCarousel_default$key } from '../../../__generated__/novelThumbnailCarousel_default.graphql';
import { novelThumbnailCarousel_latest$key } from '../../../__generated__/novelThumbnailCarousel_latest.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';

import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import { useOnResize, useOnElementResize } from '../../../utilities/hooks';
import * as M from '../../../settings/media';

export const defaultNovelThumbnailCarouselFragmentSpec = graphql`
  fragment novelThumbnailCarousel_default on Query {
    novelThumbnailCarousel: novels(first: $novelThumbnailCarouselCount, sortKey: $novelThumbnailCarouselSort)
      @connection(key: "novel_novelThumbnailCarousel") {
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

export const latestNovelThumbnailCarouselFragmentSpec = graphql`
  fragment novelThumbnailCarousel_latest on Query {
    latestNovelThumbnailCarousel: novels(first: 10, sortKey: "year")
      @connection(key: "novel_latestNovelThumbnailCarousel") {
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
  infinite: true,
  centerMode: true
};

const DEFAULT_SORT = 'lastModified';
const DEFAULT_COUNT = 10;

interface NovelThumbnailCarouselVariables {
  novelThumbnailCarouselSort: string;
  novelThumbnailCarouselCount: number;
}

export const DEFAULT_NOVEL_THUMBNAIL_CAROUSEL_VARIABLES: NovelThumbnailCarouselVariables = {
  novelThumbnailCarouselSort: DEFAULT_SORT,
  novelThumbnailCarouselCount: DEFAULT_COUNT
};

type Props = {
  className?: string;
  headingText?: string;
  type: 'latest' | 'featured';
  novels: novelThumbnailCarousel_latest$key | novelThumbnailCarousel_default$key;
};

function NovelThumbnailCarousel(props: Props) {
  const { className, headingText, type, novels } = props;

  const containerRef = useRef(document.createElement('div'));
  const containerSize = useOnElementResize(containerRef);

  const fragment = useFragment(
    type === 'latest' ? latestNovelThumbnailCarouselFragmentSpec : defaultNovelThumbnailCarouselFragmentSpec,
    novels
  );

  return (
    <S.NovelThumbnailCarouselContainer ref={containerRef} className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}

      <S.NovelThumbnailCarouselSlider {...sliderOptions}>
        {'latestNovelThumbnailCarousel' in fragment
          ? fragment.latestNovelThumbnailCarousel.edges.map(({ node }) => (
              <S.NovelThumbnailCarouselItem
                key={node.id}
                novel={node}
                dynamicDim={{
                  containerWidth: containerSize.width,
                  cardCount: 3,
                  responsive: [
                    { mediaQuery: M.MEDIA_SMALL, cardCount: 4 },
                    { mediaQuery: M.MEDIA_LARGE, cardCount: 5 }
                  ]
                }}
              />
            ))
          : ''}
        {'novelThumbnailCarousel' in fragment
          ? fragment.novelThumbnailCarousel.edges.map(({ node }) => (
              <S.NovelThumbnailCarouselItem key={node.id} novel={node} />
            ))
          : ''}
      </S.NovelThumbnailCarouselSlider>
    </S.NovelThumbnailCarouselContainer>
  );
}

export default NovelThumbnailCarousel;
