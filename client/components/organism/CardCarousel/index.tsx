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
  contents: CardContent[];
}

function CardCarousel(props: Props) {
  const { className, heading, contents } = props;

  return (
    <S.Container className={className}>
      <S.Heading>{heading}</S.Heading>
      <Swiper {...carouselParams} shouldSwiperUpdate>
        {contents.map((content, idx) => 
          <Card key={idx} content={content} />
        )}
      </Swiper>
    </S.Container>
  );
}

export default CardCarousel;
