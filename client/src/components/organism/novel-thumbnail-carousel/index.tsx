import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { novelThumbnailCarousel_novels$key } from '../../../__generated__/novelThumbnailCarousel_novels.graphql';

import * as S from './style';
import Text, { TextType } from '../../atom/text';

import { Settings } from 'react-slick';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';

const fragmentSpec = graphql`
  fragment novelThumbnailCarousel_novels on NovelConnection {
    edges {
      node {
        id
        ...novelThumbnail_novel
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
  const { edges } = useFragment(fragmentSpec, props.novels);
  const { className, headingText } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <S.NovelThumbnailCarouselContainer className={className}>
      {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
      <S.NovelThumbnailCarouselSlider {...sliderOptions}>
        {edges.map(({ node }) => (
          <S.NovelThumbnailCarouselItem key={node.id} novel={node} />
        ))}
      </S.NovelThumbnailCarouselSlider>
    </S.NovelThumbnailCarouselContainer>
  );
  /* eslint-enable react/jsx-props-no-spreading */
}

export default NovelThumbnailCarousel;
