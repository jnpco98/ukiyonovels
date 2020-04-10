import styled, { css } from 'styled-components/macro';
import SlickArrow from '../../atom/slick-arrow';
import Slick from 'react-slick';
import * as M from '../../../settings/media';
import NovelThumbnail from '../../molecule/novel-thumbnail';
import { margin } from 'polished';
import { cardDimRatio } from '../../atom/thumbnail/style';

export const NovelThumbnailCarouselContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0.65rem 0;

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
  }

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2rem', null, '2rem', null)};
  }

  ${M.MEDIA_LARGE} {
    ${margin('2.5rem', null, '2.5rem', null)};
  }
`;

type CardProps = {
  staticDim?: { mediaQuery: string, width: number, height: number }[];
  dynamicDim?: { containerWidth: number, cardCount: number, responsive: { mediaQuery: string, cardCount: number }[] };
}

export const NovelThumbnailCarouselThumbnail = styled(NovelThumbnail)`
  width: 95%;
  height: 95%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NovelThumbnailCarouselItem = styled.div<CardProps>`
  margin: 0.24rem;

  ${M.MEDIA_XXSMALL} {
    margin: 0.44rem;
  }

  ${M.MEDIA_SMALL} {
    margin: 0.5rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 1.5rem;
  }

  ${props => {
    const { staticDim, dynamicDim } = props;
    
    if(staticDim && staticDim.length) {
      return staticDim.map(dim => css`
        ${dim.mediaQuery} {
          width: ${dim.width}px !important;
          height: ${dim.height}px !important;
        }
      `);
    }

    if(dynamicDim && dynamicDim.containerWidth && dynamicDim.cardCount) {
      const { containerWidth, cardCount } = dynamicDim;
      const baseCardWidth = containerWidth / cardCount;

      return css`
        width: ${baseCardWidth}px !important;
        height: ${baseCardWidth * cardDimRatio}px !important;

        ${dynamicDim.responsive && dynamicDim.responsive.length && css`
          ${dynamicDim.responsive.map(dim => {
            const cardWidth = containerWidth / dim.cardCount;

            return css`
              ${dim.mediaQuery} {
                width: ${cardWidth}px !important;
                height: ${cardWidth * cardDimRatio}px !important;
              }
            `
          })}
        `}
      `;
    }

    return null;
  }}
`;

export const NovelThumbnailCarouselSlider = styled(Slick)`
  .slick-dots {
    left: 0;
    bottom: -2rem;

    li {
      margin: 0;

      button:before {
        color: white;
      }
    }
  }

  ${M.MEDIA_SMALL} {
    &:before,
    &:after {
      width: 14%;
    }
  }
`;

export const InfoThumbnailCarouselArrow = styled(SlickArrow)``;
