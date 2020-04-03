import styled from 'styled-components/macro';
import SlickArrow from '../../atom/slick-arrow';
import Slick from 'react-slick';
import * as M from '../../../settings/media';
import NovelThumbnail from '../../molecule/novel-thumbnail';
import { margin } from 'polished';

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

export const NovelThumbnailCarouselItem = styled(NovelThumbnail)`
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
