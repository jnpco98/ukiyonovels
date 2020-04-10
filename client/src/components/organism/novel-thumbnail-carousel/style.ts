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

export const NovelThumbnailCarouselItem = styled(NovelThumbnail)<CardProps>`
  margin-right: 0.65rem;

  ${M.MEDIA_XXSMALL} {
    margin-right: 0.9rem;
  }

  ${M.MEDIA_SMALL} {
    margin-right: 1.2rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 1.5rem;
  }

  ${props => {
    const { staticDim, dynamicDim } = props;
    
    if(staticDim && staticDim.length) {
      return staticDim.map(dim => css`
        ${dim.mediaQuery} {
          width: ${dim.width}px;
          height: ${dim.height}px;
        }
      `);
    }

    if(dynamicDim && dynamicDim.containerWidth && dynamicDim.cardCount) {
      const { containerWidth, cardCount } = dynamicDim;
      const baseCardWidth = containerWidth / cardCount;

      return css`
        width: ${baseCardWidth}px;
        height: ${baseCardWidth * cardDimRatio}px;

        ${dynamicDim.responsive && dynamicDim.responsive.length && css`
          ${dynamicDim.responsive.map(dim => {
            const cardWidth = containerWidth / dim.cardCount;

            return css`
              ${dim.mediaQuery} {
                width: ${cardWidth}px;
                height: ${cardWidth * cardDimRatio}px;
              }
            `
          })}
        `}
      `;
    }

    return null;
  }}
`;

  /* width: 6.2rem;
  height: ${math(`6.2rem * ${cardDimRatio}`)};

  ${M.MEDIA_SMALL} {
    width: 8.5rem;
    height: ${math(`8.5rem * ${cardDimRatio}`)};
  }

  ${M.MEDIA_XLARGE} {
    width: 9.5rem;
    height: ${math(`9.5rem * ${cardDimRatio}`)};
  }

  ${M.MEDIA_XXLARGE} {
    width: 10.7rem;
    height: ${math(`10.7rem * ${cardDimRatio}`)};
    border-radius: 0.7rem;
  }

  &:hover {
    transform: scale(1.1);
  } */
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
