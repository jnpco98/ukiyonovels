import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import SidePanel from '../../organism/side-panel';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, GUTTER_BOTTOM } from '../../../utilities/mixins';
import InfoThumbnailCarousel from '../../organism/info-thumbnail-carousel';
import ImageCarousel from '../../organism/image-carousel';
import { ImageCarouselSliderItem, ImageCarouselContent } from '../../organism/image-carousel/style';

export const HomeContainer = styled.div`
  width: 100%;
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  ${gutter(GUTTER_BOTTOM)};
  
  ${M.MEDIA_MEDIUM} {
    display: flex;
  }
`;

export const HomeBanner = styled(ImageCarousel)`
  ${ImageCarouselSliderItem} {
    min-height: 20rem;

    ${M.MEDIA_XSMALL} {
      min-height: 29rem;
    }

    ${M.MEDIA_MEDIUM} {
      min-height: 40rem;
    }

    ${M.MEDIA_LARGE} {
      min-height: 80vh;
    }
  }

  ${ImageCarouselContent} {
    max-width: 14rem;

    ${M.MEDIA_XXSMALL} {
      max-width: 20rem;
    }

    ${M.MEDIA_MEDIUM} {
      max-width: 25rem;
    }

    ${M.MEDIA_LARGE} {
      max-width: 30rem;
    }
  }
`;

export const HomeWrapper = styled.div`
  width: 100%;
  ${M.MEDIA_MEDIUM} {
    flex: 1;
    width: 0;
  }
`;

export const HomeSidePanel = styled(SidePanel)`
  margin-top: 4rem;

  ${M.MEDIA_MEDIUM} {
    padding-left: 2rem;
    margin-top: 0.2rem;
    flex: 0.4;
  }

  ${M.MEDIA_LARGE} {
    margin-top: 0.7rem;
    padding-left: 6rem;
  }

  ${M.MEDIA_XXLARGE} {
    flex: 0.3;
    padding-left: 8rem;
  }
`;

export const HomeInfoThumbnailCarousel = styled(InfoThumbnailCarousel)`
  margin-bottom: 2rem;
  transition: all 0.5s ease;
`;