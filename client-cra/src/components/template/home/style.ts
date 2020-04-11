import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import SidePanel from '../../organism/side-panel';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, GUTTER_BOTTOM } from '../../../utilities/mixins';
import NovelThumbnailCarousel from '../../organism/novel-thumbnail-carousel';
import ImageCarousel from '../../organism/image-carousel';
import { ImageCarouselSliderItem, ImageCarouselContent } from '../../organism/image-carousel/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// const w = 400;
// const ratio = 0.5;
const w = 200;
const ratio = 1.75;

export const TestCardWrapper = styled.div`

  width: ${w}px;
  height: ${w * ratio}px;
`;
export const TestCard = styled.div`
/* width: 90%;
height: 90%; */
padding: 1rem 0.2rem;
  /* background: red; */

  .card__content {
    margin: 0 5px 20px;
    box-shadow: 0 0 rgba(0,0,0,.2);
    border-radius: 5px;
    position: relative;
    transition: all .15s ease-out;

    &:hover {
      box-shadow: 0 0 10px 10px rgba(0,0,0,.2);
      border-radius: 15px;
      z-index: 10;

      .card__content-details {
        transform: translateY(-42px) scale(1.05, 1.05);
        border-radius: 10px 10px 0 0;
        z-index: 12;
        background-color: #fff;
        padding-bottom: 0.5rem;
      }

      .card__content-details__title {
        color: black;
        padding: 0.15rem 0.4rem;
      }

      .card__content-details__reveal {
        height: 39px;
        border-radius: 0 0 20px 20px;
        overflow: visible;
        z-index: 12;
        transform: scale(1.05,1.05);
      }

      .card__content-details__reveal-content {
        transform: translateY(0);
      }

      .card__content-image {
        box-shadow: 0 0 10px 10px rgba(0,0,0,.2);
        border-radius: 15px 15px 0 0;
        z-index: 10;
        transform: scale(1.05,1.05);
      }
      
      .card__content-image__link {
        opacity: 1;
      }
    }
  }

  .card__content-image {
    display: block;
    background-image: url(//d1pnza0erna1im.cloudfront.net/shows/kakushigoto_portrait-key-art-normal-small_86920.jpeg);
    background-repeat: no-repeat;
    background-size: 100.1%;
    background-position: 50% 50%;
    border-radius: 5px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    position: relative;
    transition: all .15s ease-out;
    background-clip: padding-box;

    &:before {
      display: block;
      content: '';
      width: 100%;
      padding-top: ${100 * (ratio - (ratio * 0.14))}%;
    }
  }

  .card__content-image__link {
    background: linear-gradient(to bottom,#17003a 0,rgba(0,0,0,0) 50%);
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    transition: all .15s ease-out;
    opacity: 0;
  }

  .card__content-details {
    transition: all .15s ease-out;
    box-sizing: border-box;
    padding: 0;
    z-index: 8;
    position: relative;
    border-radius: 0;
  }

  .card__content-details__title {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255,255,255,.6);
    font-weight: bold;
    a {
      /* color: white; */
      font-size: 15px;
    }

    & + & {
      padding: 5px 0 0px;
    }
  }

  .card__content-details__reveal {
    background: white;
    transition: all .1s ease-out;
    position: absolute;
    overflow: hidden;
    z-index: 9;
    bottom: 1px;
    left: 0;
    right: 0;
    height: 0;
  }

  .card__content-details__reveal-content {
    transform: translateY(-42px);
    border-radius: 30px;
    background-color: #fff;
    color: #3f4250;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 15px 8px;
    border: 1px solid #fff;
    margin: 0;
    transition: all .15s ease-out;
    width: 100%;
    box-shadow: 0 -1px 20px 0 rgba(141,139,142,.49);
    display: block;
    line-height: 1.428571429;
    font-size: 0.8rem;

    &:hover {
      background-color: #0fa!important;
      color: #004d33!important;
      border: 1px solid #0fa!important;
      box-shadow: 0 0 15px 0 #0fa;
    }
  }

  .is-dot-item {
    top: 0;
    left: 1px;
    width: 1em;
    position: relative;
    line-height: 1;

    &:before {
      content: '*';
      top: 2px;
    }
  }

  .is-snippet {    
    display: inline-block;
    background-color: rgba(0,0,0,.25);
    padding: 2px 7px;
    margin: 0 2px 0 0;
    line-height: 1.1;
    font-weight: 400;
    border-radius: 4px;
    font-size: 12px;
  }
`;

export const CardPlayIcon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  width: 1rem;
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);

  &:before {
    content: ">";
  }
`;

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

export const HomeNovelThumbnailCarousel = styled(NovelThumbnailCarousel)`
  margin-bottom: 2rem;
  transition: all 0.5s ease;
`;
