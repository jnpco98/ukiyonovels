import styled from 'styled-components';
import * as M from '@utilities/media';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.screen.innerMaxWidth};
  background: ${({ theme }) => theme.colors.primary};

  .swiper-wrapper {
    padding: 2rem 0;
  }

  ${M.MEDIA_XXSMALL} {
    .swiper-wrapper {
      padding: 2rem 0 2rem;
    }
  }

  ${M.MEDIA_XSMALL} {
    .swiper-wrapper {
      padding: 2rem 0 6rem;
    }
  }

  ${M.MEDIA_SMALL} {
    .swiper-wrapper {
      padding: 2rem 0 8rem;
    }
  }

  ${M.MEDIA_LARGE} {
    .swiper-wrapper {
      padding: 2rem 0 10rem;
    }
  }

  ${M.MEDIA_XLARGE} {
    .swiper-wrapper {
      padding: 2rem 0 12rem;
    }
  }
`;