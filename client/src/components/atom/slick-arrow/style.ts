import styled from 'styled-components/macro';
import * as M from '../../../settings/media';

export const SlickArrowContainer = styled.div`
  font-size: 1rem;
  z-index: 10;

  &:before,
  &:after {
    transition: all 0.3s ease;
  }

  &.slick-prev {
    left: 0.5rem;
  }

  &.slick-next {
    right: 0.5rem;
  }

  ${M.MEDIA_MEDIUM} {
    width: 1.8rem;
    height: 1.8rem;

    &:before {
      font-size: 1.8rem;
    }

    &.slick-next {
      right: 1rem;
    }

    &.slick-prev {
      left: 1rem;
    }
  }

  ${M.MEDIA_LARGE} {
    &.slick-next {
      right: 2rem;
    }

    &.slick-prev {
      left: 2rem;
    }
  }
`;
