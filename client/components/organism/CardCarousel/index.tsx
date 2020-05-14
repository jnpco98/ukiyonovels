import React from 'react';
import Swiper from 'react-id-swiper';
import { getRawDimension, XXSMALL, SMALL } from '@utilities/media';
import Card, { CardContent } from '@components/molecule/Card';
import * as S from './style';

const carouselParams = {
  slidesPerView: 2,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-controls.swiper-button-next',
    prevEl: '.swiper-controls.swiper-button-prev'
  },
  breakpoints: {
    [getRawDimension(XXSMALL)]: {
      slidesPerView: 3
    },
    [getRawDimension(SMALL)]: {
      slidesPerView: 4
    }
  },
  watchOverflow: true,
  simulateTouch: true
};

type Props = {
  className?: string;
  heading?: string,
  cardContents: {
    thumbnail: string;
    content: CardContent;
  }[];
}

function CardCarousel(props: Props) {
  const { className, heading, cardContents } = props;

  return (
    <S.Wrapper className={className}>
      <S.Heading>{heading}</S.Heading>
      <Swiper {...carouselParams} shouldSwiperUpdate>
        {cardContents.map((content, idx) => 
          <Card key={idx} thumbnail={content.thumbnail}content={content.content} />
        )}
      </Swiper>
    </S.Wrapper>
  );
}

export default CardCarousel;
