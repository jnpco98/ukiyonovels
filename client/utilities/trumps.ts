import { css, createGlobalStyle } from 'styled-components';
import * as M from '@utilities/media';

const swiper = css`
  .swiper-container {
    .swiper-controls {
      background: transparent;

      &:after {
        font-size: 2rem;
      }
    }

    .swiper-pagination-progressbar {
      top: 2rem;
    }

    .swiper-pagination-progressbar-fill {
      background: ${({ theme }) => theme.colors.primary};
    }

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: 50%;
      z-index: 1;
      width: 1.5rem;
      padding: 1rem;
      height: 4rem;
      transition: 0.3s ease;
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      &:after {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }

    .swiper-button-next {
      right: 0;
      padding-right: 0;
      transform: translate(-50%, -50%);
      &:hover {
        transform: translate(-20%, -50%);
      }
    }

    .swiper-button-prev {
      left: 0;
      padding-left: 0;
      transform: translate(50%, -50%);
      &:hover {
        transform: translate(20%, -50%);
      }
    }

    ${M.MEDIA_XSMALL} {
      .swiper-wrapper {
        padding: 0 0 3rem;
      }
    }

    ${M.MEDIA_SMALL} {
      .swiper-wrapper {
        padding: 0 0 5rem;
      }
      .swiper-button-next,
      .swiper-button-prev {
        display: block;
      }

      .swiper-pagination {
        display: none;
      }
    }

    ${M.MEDIA_MEDIUM} {
      .swiper-wrapper {
        padding: 0 0 3rem;
      }

      .swiper-button-next {
        transform: translate(-100%, -50%);
        &:hover {
          transform: translate(-60%, -50%);
        }
      }

      .swiper-button-prev {
        transform: translate(100%, -50%);
        &:hover {
          transform: translate(60%, -50%);
        }
      }
    }

    ${M.MEDIA_LARGE} {
      .swiper-button-next {
        transform: translate(-120%, -50%);
        &:hover {
          transform: translate(-80%, -50%);
        }
      }

      .swiper-button-prev {
        transform: translate(120%, -50%);
        &:hover {
          transform: translate(80%, -50%);
        }
      }
    }
  }
`;

export default createGlobalStyle`
  ${swiper}
`;