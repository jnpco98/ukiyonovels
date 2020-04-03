import styled from 'styled-components/macro';
import Slick from 'react-slick';
import SlickArrow from '../../atom/slick-arrow';
import Button, { ButtonType } from '../../atom/button';
import * as M from '../../../settings/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Paragraph, SubsectionTitle } from '../../atom/text/style';
import {
  center,
  FLEX_ALIGN_CROSS,
  gutter,
  GUTTER_LEFT,
  pageTitleFontSize,
  GUTTER_RIGHT
} from '../../../utilities/mixins';

export const ImageCarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.65rem;

  ${M.MEDIA_XXSMALL} {
    margin-bottom: 1rem;
  }

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.5rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2rem;
  }

  ${M.MEDIA_LARGE} {
    margin-bottom: 2.5rem;
  }
`;

export const ImageCarouselSlider = styled(Slick)`
  .slick-dots {
    left: 0;
    bottom: 1.5rem;

    li {
      margin: 0;
    }
  }
`;

export const ImageCarouselSliderItem = styled.div`
  display: flex !important;
  position: relative;

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

  ${M.MEDIA_SMALL} {
    &:after {
      height: 10rem;
    }
  }

  ${M.MEDIA_MEDIUM} {
    &:after {
      height: 14rem;
    }
  }
`;

export const ImageCarouselBackgroundImage = styled.img`
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

export const ImageCarouselMobileBackgroundImage = styled(ImageCarouselBackgroundImage)`
  display: block;

  ${M.MEDIA_SMALL} {
    && {
      display: none;
    }
  }
`;

export const ImageCarouselContent = styled.div`
  ${center(FLEX_ALIGN_CROSS)};
  position: relative;
  flex-direction: column;
`;

export const Arrow = styled(SlickArrow)``;

export const ImageCarouselHeading = styled(SubsectionTitle)`
  color: ${({ theme, ...props }) => theme.colors.white};
  ${pageTitleFontSize};

  margin-bottom: 0.3rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 0.5rem;
  }
`;

export const ImageCarouselSubtitle = styled(Paragraph)`
  color: ${({ theme, ...props }) => theme.colors.white};
  margin-bottom: 0.9rem;

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2rem;
  }
`;

export const ImageCarouselLinkButton = styled(Button).attrs({ type: ButtonType.Info })`
  align-self: baseline;
  z-index: 1;
`;

export const ImageCarouselBookButtonIcon = styled(FontAwesomeIcon).attrs({ icon: faBookOpen })`
  margin-right: 0.3rem;
`;
