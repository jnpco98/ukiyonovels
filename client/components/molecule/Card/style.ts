import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Text, { TextType } from '@components/atom/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { center, CENTER_VERTICAL, regularFontSize } from '@utilities/mixins';
import Tabs from '@components/molecule/Tabs';
import List from '@components/molecule/List';
import * as M from '@utilities/media';

const INITIAL_WIDTH = 13;

export const CARD_RATIO = 1.75;

const HOVER_SCALE = 1.05;

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

export const Title = styled(Text).attrs({ textType: TextType.Paragraph })`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const Reveal = styled.div`
  right: 0;
  bottom: 0.15rem;
  left: 0;
  height: 0;
  z-index: 4;
  background: ${({ theme }) => theme.colors.background};
  transition: all 0.15s ease;
  position: absolute;
  overflow: hidden;
`;

export const RevealContent = styled.a`
  ${regularFontSize};
  display: block;
  margin: 0;
  width: 100%;
  line-height: 1.43;
  border-radius: 2rem;
  padding: 0.7rem 0.9rem 0.65rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 0.0625rem solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 -0.0625rem 1.3rem 0 ${({ theme }) => theme.colors.primaryCompliment};
  transform: translateY(-2.2rem);
  transition: all 0.15s ease, box-shadow 0ms;

  ${M.MEDIA_SMALL} {
    &:hover {
      ${({ theme }) => css`      
        color: ${theme.colors.primary};
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

export const TabbedList = styled(Tabs)``;

export const InlineList = styled(List)``;

export const Overlay = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 0.15s ease;
  
  ${({ theme }) => css`
    background: linear-gradient(to bottom, ${theme.colors.primary} 0, ${transparentize(1, theme.colors.primary)} 50%);
  `};
`;

export const Content = styled.div`
  margin: 1rem 0.3rem 1.2rem;
  border-radius: 0.3rem;
  position: relative;
  transition: all 0.15s ease;
  
  border-radius: 0.9rem;
  z-index: 3;

  ${TabbedList} {
    display: none;
  }

  &:hover {
    ${Details} {
      transform: scale(${HOVER_SCALE}, ${HOVER_SCALE});
      border-radius: 0.7rem 0.7rem 0 0;
      background-color: ${({ theme }) => theme.colors.background};
      z-index: 4;
    }

    ${TabbedList} {
      display: block;
    }

    ${RevealContent} {
      transform: translateY(0);
    }

    ${Image} {
      border-radius: 1rem 1rem 0 0;
      transform: scale(${HOVER_SCALE}, ${HOVER_SCALE});
      z-index: 3;
    }

    ${Overlay} {
      opacity: 1;
    }
  }

  ${M.MEDIA_SMALL} {
    &:hover {
      ${Details} {
        transform: translateY(-2.5rem) scale(${HOVER_SCALE}, ${HOVER_SCALE});
        padding: 0.8rem 0.5rem 1rem;
      }

      ${Reveal} {
        height: 2.3rem;
        border-radius: 0 0 1.2rem 1.2rem; 
        overflow: visible;
        transform: scale(${HOVER_SCALE}, ${HOVER_SCALE});
        z-index: 4;
      } 
    }
  }
`;

export const RevealIcon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  ${center(CENTER_VERTICAL)};
  width: 1rem;
  height: 1rem;
  right: 0.5rem;
`;