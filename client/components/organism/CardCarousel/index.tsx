import React, { useState } from 'react';
import Swiper, { SwiperInstance } from 'react-id-swiper';
import { getRawDimension, XXSMALL, SMALL } from '@utilities/media';
import Card, { CardContent } from '@components/molecule/Card';
import * as S from './style';

const carouselParams = {
  slidesPerView: 2,
  slidesPerGroup: 2,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-controls.swiper-button-next',
    prevEl: '.swiper-controls.swiper-button-prev'
  },
  breakpoints: {
    [getRawDimension(XXSMALL)]: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    [getRawDimension(SMALL)]: {
      slidesPerView: 4,
      slidesPerGroup: 4
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
  const [swiper, updateSwiper] = useState<SwiperInstance>(null);

  function nextSlide() {
    if(swiper) swiper.slideNext();
  }

  function previousSlide() {
    if(swiper) swiper.slidePrev();
  }

  return (
    <S.Container className={className}>
      {heading && <S.Heading>{heading}</S.Heading>}
      <Swiper {...carouselParams} shouldSwiperUpdate getSwiper={updateSwiper}>
        {contents.map((content, idx) => 
          <Card key={idx} content={content} />
        )}
      </Swiper>
    </S.Container>
  );
}

export default CardCarousel;
