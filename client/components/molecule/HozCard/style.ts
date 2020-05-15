import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Text, { TextType } from '@components/atom/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { center, regularFontSize, CENTER_BOTH } from '@utilities/mixins';
import Tabs from '@components/molecule/Tabs';
import List from '@components/molecule/List';
import * as M from '@utilities/media';

export const CARD_RATIO = 0.5;

const HOVER_SCALE = 1.02;

export const Container = styled.div`
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.15s ease;
  padding: 0.8rem 0;
  z-index: 2;
  position: relative;
  border-radius: 1rem;
`;

export const Title = styled(Text).attrs({ textType: TextType.Paragraph })`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const Meta = styled.div`
  flex: 0.7;
`;

export const Reveal = styled.div`
  height: 0;
  z-index: 4;
  flex: 0.3;
  transition: all 0.15s ease;
  overflow: hidden;
`;

export const RevealContent = styled.a`
  ${regularFontSize};
  width: 3rem;
  height: 3rem;
  display: block;
  margin-left: auto;
  border-radius: 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
  transition: all 0.15s ease;
  overflow: hidden;

  &:hover {
    ${({ theme }) => css`      
      color: ${theme.colors.background};
      background-color: ${theme.colors.primary};
      border: 0.0625rem solid ${theme.colors.border};
    `};
  }
`;

export const RevealIcon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  ${center(CENTER_BOTH)};
  width: 1.5rem;
  height: 1.5rem;
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
`;

export const Content = styled.div`
  margin: 1rem 0.3rem 1.2rem;
  border-radius: 0.3rem;
  position: relative;
  transition: all 0.15s ease;
  
  border-radius: 0.9rem;
  z-index: 3;

  &:hover {
    ${Details} {
      transform: scale(${HOVER_SCALE}, ${HOVER_SCALE});
    }

    ${Image} {
      border-radius: 1rem 1rem 0 0;
      transform: scale(${HOVER_SCALE - 0.005}, ${HOVER_SCALE});
      z-index: 3;
    }

    ${Reveal} {
      border-radius: 0 0 1.2rem 1.2rem; 
    }

    ${M.MEDIA_SMALL} {
      ${Details} {
        transform: translateY(-2rem) scale(${HOVER_SCALE}, ${HOVER_SCALE});
        padding: 0.8rem 1rem 1rem;
        background-color: ${({ theme }) => theme.colors.background};
        z-index: 4;
      }

      ${RevealContent} {
        transform: translateY(0);
      }

      ${Overlay} {
        opacity: 1;
      }

      ${Reveal} {
        height: auto;
        overflow: visible;
      }
      
      ${Overlay} {
        ${({ theme }) => css`
          background: linear-gradient(to bottom, ${transparentize(0.2, theme.colors.primary)} 0, ${transparentize(1, theme.colors.primary)} 50%);
        `};
      }

    }
  }
`;