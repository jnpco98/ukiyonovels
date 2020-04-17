import React from 'react';
import Swiper from 'react-id-swiper';
import { truncate } from '@utilities/string';
import { Colors } from '@themeTypes';
import * as S from './style';

type BannerContent = {
  heading?: string;
  description?: string;
  ctaText?: string;
  link?: string;
  dark?: boolean;
} & (
  | { mobileImage: string }
  | { desktopImage: string }
  | { mobileImage: string; desktopImage: string }
);

type Props = {
  className?: string;
  contents?: BannerContent[];
  backgroundBase?: keyof Colors;
};

const sliderParams = {
  slidesPerView: 1,
  centeredSlides: false,
  loop: true,
  pagination: {
    el: '.swiper-controls.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-controls.swiper-button-next',
    prevEl: '.swiper-controls.swiper-button-prev'
  },
  watchOverflow: true,
  simulateTouch: true
};

function Banner(props: Props) {
  const { className, contents, backgroundBase } = props;

  return (
    <S.Container className={className}>
      <Swiper {...sliderParams} shouldSwiperUpdate>
        {contents.map((content) => {
          const { heading, description, ctaText, link, dark } = content;
          const mobileImage = 'mobileImage' in content ? content.mobileImage : content.desktopImage;
          const desktopImage =
            'desktopImage' in content ? content.desktopImage : content.mobileImage;
          const key = heading + link;

          return (
            <S.Item key={key} backgroundBase={backgroundBase}>
              <S.BackgroundImage src={desktopImage || mobileImage} alt="Banner" />
              <S.MobileBackgroundImage src={mobileImage || desktopImage} alt="Banner" />
              <S.Content dark={dark}>
                {heading && <S.Heading>{heading}</S.Heading>}
                {description && <S.Subtitle>{truncate(description, 130)}</S.Subtitle>}
                {ctaText && (
                  <S.LinkButton link={link}>
                    <S.CtaIcon /> {ctaText}
                  </S.LinkButton>
                )}
              </S.Content>
            </S.Item>
          );
        })}
      </Swiper>
    </S.Container>
  );
}

export default Banner;
