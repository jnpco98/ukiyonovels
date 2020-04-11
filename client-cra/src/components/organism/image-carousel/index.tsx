import React, { ReactElement } from 'react';
import { Settings } from 'react-slick';
import { SMALL } from '../../../settings/media';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import * as S from './style';
import { truncate } from '../../../utilities/string';

import Swiper from 'react-id-swiper';

type HeroBannerContents =
  | {
      mobileImage?: string;
      desktopImage: string;
      headingText?: string;
      description?: string;
      buttonText?: string;
      link?: string;
    }
  | {
      mobileImage: string;
      desktopImage: string;
      headingText?: string;
      description?: string;
      buttonText?: string;
      link?: string;
    };

type Props = {
  className?: string;
  contents?: HeroBannerContents[];
};

const params = {
  slidesPerView: 1,
  centeredSlides: false,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
    // dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  watchOverflow: true
};

const ImageCarousel: React.FC<Props> = (props: Props): ReactElement => {
  const { className, contents } = props;

  const sliderOptions: Settings = {
    ...DEFAULT_SLIDER_SETTINGS,
    prevArrow: <S.Arrow />,
    nextArrow: <S.Arrow />,
    responsive: [
      {
        breakpoint: +SMALL.replace(/\D/g, ''),
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <S.ImageCarouselContainer className={className}>
      {/* <S.ImageCarouselSlider {...sliderOptions}> */}
      <Swiper {...params} shouldSwiperUpdate>
        {contents.map(content => {
          const { mobileImage, desktopImage, headingText, description, buttonText, link } = content;

          return (
            <S.ImageCarouselSliderItem key={mobileImage + desktopImage}>
              <S.ImageCarouselBackgroundImage src={desktopImage || mobileImage} alt="Hero Banner" />
              <S.ImageCarouselMobileBackgroundImage src={mobileImage || desktopImage} alt="Hero Banner" />
              <S.ImageCarouselContent>
                {headingText && <S.ImageCarouselHeading>{headingText}</S.ImageCarouselHeading>}
                {description && <S.ImageCarouselSubtitle>{truncate(description, 130)}</S.ImageCarouselSubtitle>}
                {buttonText && (
                  <S.ImageCarouselLinkButton href={link}>
                    <S.ImageCarouselBookButtonIcon /> {buttonText}
                  </S.ImageCarouselLinkButton>
                )}
              </S.ImageCarouselContent>
            </S.ImageCarouselSliderItem>
          );
        })}
      </Swiper>
      {/* </S.ImageCarouselSlider> */}
    </S.ImageCarouselContainer>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default ImageCarousel;
