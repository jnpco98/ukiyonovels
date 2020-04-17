import React from 'react';
import Swiper from 'react-id-swiper';
import { getRawDimension, XXSMALL, XSMALL, SMALL, MEDIUM, LARGE } from '@utilities/media';
import Card from '@components/molecule/Card';
import * as S from './style';

const carouselParams = {
  slidesPerView: 2,
  centeredSlides: false,
  pagination: {
    el: '.swiper-controls.swiper-pagination',
    type: 'progressbar',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-controls.swiper-button-next',
    prevEl: '.swiper-controls.swiper-button-prev'
  },
  breakpoints: {
    [getRawDimension(XXSMALL)]: {
      slidesPerView: 3
    },
    [getRawDimension(XSMALL)]: {
      slidesPerView: 3
    },
    [getRawDimension(SMALL)]: {
      slidesPerView: 4
    },
    [getRawDimension(MEDIUM)]: {
      slidesPerView: 5
    },
    [getRawDimension(LARGE)]: {
      slidesPerView: 6
    }
  },
  watchOverflow: true,
  simulateTouch: true
};

function CardCarousel() {
  return (
    <S.Container>
      <S.Wrapper>
        <Swiper {...carouselParams} shouldSwiperUpdate>
          {Array(10)
            .fill(0)
            .map((e, idx) => (
              <Card key={idx} />
            ))}
        </Swiper>
      </S.Wrapper>
    </S.Container>
  );
}

export default CardCarousel;
