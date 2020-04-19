import styled, { css } from 'styled-components';
import Text, { TextType } from '@components/atom/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { center, CENTER_VERTICAL, regularFontSize } from '@utilities/mixins';
import { smallFontSize, xSmallFontSize } from '@utilities/mixins';
import * as M from '@utilities/media';

const INITIAL_WIDTH = 13;

export const CARD_RATIO = 1.75;

export const Container = styled.div`
  width: ${INITIAL_WIDTH}rem;
  height: ${INITIAL_WIDTH * CARD_RATIO}rem;
`;

export const Wrapper = styled.div`
  padding: 1rem 0.2rem;
`;

export const Details = styled.div`
  transition: all 0.15s ease;
  padding: 0.8rem 0;
  z-index: 2;
  position: relative;
  border-radius: 0;
`;

export const DetailsTitle = styled(Text).attrs({ textType: TextType.Paragraph })`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
`;

export const DotSeparator = styled(FontAwesomeIcon).attrs({ icon: faCircle })`
  font-size: 1.1rem;
  height: 0.3rem;
`;

export const DetailsInfo = styled.p`
  ${smallFontSize};
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.6rem;
`;

export const DetailsTabs = styled.p`
  ${xSmallFontSize};
  margin-top: 0.6rem;
  text-transform: uppercase;
  display: block;
  color: ${({ theme }) => theme.colors.primary};

  span {
    background: ${({ theme }) => theme.colors.secondary};
    padding: 0.1rem 0.4rem;
    display: inline-block;
    border-radius: 1rem;
    margin-bottom: 0.15rem;
  }

  span:nth-child(odd) {
    margin-right: 0.3rem;
  }

  ${M.MEDIA_SMALL} {
    display: none;
  }
`;

export const Reveal = styled.div`
  background: ${({ theme }) => theme.colors.background};
  transition: all 0.1s ease;
  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0.15rem;
  left: 0;
  height: 0;
  z-index: 4;
`;

export const RevealContent = styled.a`
  ${regularFontSize};
  display: block;
  transform: translateY(-2.2rem);
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.7rem 0.9rem 0.65rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.background};
  margin: 0;
  transition: all 0.15s ease;
  width: 100%;
  line-height: 1.43;
  box-shadow: 0 -0.0625rem 1.3rem 0 rgba(141, 139, 142, 0.49);


  ${M.MEDIA_SMALL} {
    &:hover {
      ${({ theme }) => css`      
        color: ${theme.colors.default};
        background-color: ${theme.colors.backgroundSecondary};
        border: 0.0625rem solid ${theme.colors.border};
      `};
    }
  }
`;

export const Image = styled.div<{ img: string; }>`
  display: block;
  background: url(${props => props.img}) no-repeat;
  background-size: 100.1%;
  background-position: 50% 50%;
  border-radius: 0.3rem;
  overflow: hidden;
  position: relative;
  transition: all 0.15s ease;
  background-clip: padding-box;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: ${100 * (CARD_RATIO - (CARD_RATIO * 0.14))}%;
  }
`;

export const Overlay = styled.a`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary} 0, rgba(0, 0, 0, 0) 50%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.15s ease;
  opacity: 0;
`;

export const Content = styled.div`
  margin: 1rem 0.3rem 1.2rem;
  border-radius: 0.3rem;
  position: relative;
  transition: all 0.15s ease;

  ${M.MEDIA_SMALL} {
    &:hover {
      border-radius: 0.9rem;
      z-index: 3;

      ${Details} {
        transform: translateY(-2.5rem) scale(1.05, 1.05);
        border-radius: 0.7rem 0.7rem 0 0;
        background-color: ${({ theme }) => theme.colors.background};
        padding: 0.8rem 0.8rem 1rem;
        z-index: 4;
      }

      ${DetailsTitle}, ${DetailsInfo}, ${DetailsTabs} {
        color: ${({ theme }) => theme.colors.primary};
      }

      ${DetailsTabs} {
        display: block;
      }

      ${Reveal} {
        height: 2.3rem;
        border-radius: 0 0 1.2rem 1.2rem;
        overflow: visible;
        transform: scale(1.049, 1.05);
        z-index: 4;
      }

      ${RevealContent} {
        transform: translateY(0);
      }

      ${Image} {
        border-radius: 1rem 1rem 0 0;
        transform: scale(1.045, 1.05);
        z-index: 3;
      }

      ${Overlay} {
        opacity: 1;
      }
    }
  }
`;

export const CtaIcon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  ${center(CENTER_VERTICAL)};
  width: 1rem;
  height: 1rem;
  right: 0.5rem;
`;