import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import * as M from '@utilities/media';
import Button, { ButtonType } from '@components/atom/Button';
import { Paragraph, SubsectionTitle } from '@components/atom/Text/style';
import {
  center,
  FLEX_ALIGN_CROSS,
  gutter,
  GUTTER_LEFT,
  pageTitleFontSize,
  GUTTER_RIGHT
} from '@utilities/mixins';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.65rem;

  .swiper-controls {
    color: ${({ theme }) => theme.colors.primary};
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .swiper-button-next, .swiper-button-prev {
    display: none;
    height: 3rem;
    transition: 0.3s ease;
  }

  .swiper-button-next {
    transform: translateX(-50%);
    &:hover {
      transform: translateX(-20%);
    }
  }
  
  .swiper-button-prev {
    transform: translateX(50%);
    &:hover {
      transform: translateX(20%);
    }
  }

  ${M.MEDIA_XXSMALL} {
    margin-bottom: 1rem;
  }

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.5rem;

    .swiper-button-next, .swiper-button-prev {
      display: block;
    }

    .swiper-pagination {
      display: none;
    }
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2rem;
    
    .swiper-button-next {
      transform: translateX(-100%);
      &:hover {
        transform: translateX(-60%);
      }
    }
    
    .swiper-button-prev {
      transform: translateX(100%);
      &:hover {
        transform: translateX(60%);
      }
    }
  }

  ${M.MEDIA_LARGE} {
    margin-bottom: 2.5rem;

    .swiper-button-next {
      transform: translateX(-120%);
      &:hover {
        transform: translateX(-80%);
      }
    }
    
    .swiper-button-prev {
      transform: translateX(120%);
      &:hover {
        transform: translateX(80%);
      }
    }
  }
`;

export const Item = styled.div`
  display: flex !important;
  position: relative;
  height: 20rem;
  
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(245, 245, 245, 0) 0%, rgba(245, 245, 245, 1) 100%);
    width: 100%;
    height: 5rem;
  }

  ${M.MEDIA_XSMALL} {
    height: 28rem;
  }

  ${M.MEDIA_SMALL} {
    height: 34rem;
    &:after {
      height: 10rem;
    }
  }

  ${M.MEDIA_MEDIUM} {
    height: 40rem;
    &:after {
      height: 14rem;
    }
  }

  ${M.MEDIA_XLARGE} {
    height: 49rem;
  }

  ${M.MEDIA_XXLARGE} {
    height: 60rem;
  }
`;

export const BackgroundImage = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  display: none;

  object-fit: cover;

  ${M.MEDIA_SMALL} {
    && {
      display: block;
    }
  }
`;

export const MobileBackgroundImage = styled(BackgroundImage)`
  display: block;

  ${M.MEDIA_SMALL} {
    && {
      display: none;
    }
  }
`;

export const Content = styled.div<{ dark?: boolean }>`
  ${center(FLEX_ALIGN_CROSS)};
  color: ${({ theme }) => theme.colors.background};
  position: relative;
  flex-direction: column;

  ${props =>
    props.dark &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `};
`;

export const Heading = styled(SubsectionTitle)`
  ${pageTitleFontSize};

  width: 18rem;
  margin-bottom: 0.3rem;

  ${M.MEDIA_SMALL} {
    width: 26rem;
    margin-bottom: 0.5rem;
  }
`;

export const Subtitle = styled(Paragraph)`
  width: 16rem;
  margin-bottom: 0.9rem;

  ${M.MEDIA_SMALL} {
    width: 20rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2rem;
  }
`;

export const LinkButton = styled(Button).attrs({ type: ButtonType.Info })`
  align-self: baseline;
  z-index: 1;
`;

export const CtaIcon = styled(FontAwesomeIcon).attrs({ icon: faBookOpen })`
  margin-right: 0.3rem;
`;