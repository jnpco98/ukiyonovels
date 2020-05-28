import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Text, { TextType } from '@components/atom/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { center, CENTER_VERTICAL } from '@utilities/mixins';
import Tabs from '@components/molecule/TabbedList';
import InlineList from '@components/molecule/InlineList';
import * as M from '@utilities/media';
import Button from '@components/atom/Button';

export const CARD_RATIO = 1.75;

const HOVER_SCALE = 1.05;

export const Container = styled.div`
  width: 100%;
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
  font-weight: ${({ theme }) => theme.font.bold};
  font-family: ${({ theme }) => theme.font.secondary};
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

export const RevealContent = styled(Button)`
  margin: 0;
  width: 100%;
  border-radius: 2rem !important;
  transform: translateY(-2.2rem);padding: 0.7rem 0.9rem 0.65rem;
  text-align: left;
`;

export const Image = styled.div<{ img: string; }>`
  display: block;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
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

export const DotSeparatedList = styled(InlineList)``;

export const TabbedList = styled(Tabs)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

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
  margin: 1rem 0.3rem 0rem;
  border-radius: 0.3rem;
  position: relative;
  transition: all 0.15s ease;
  
  border-radius: 0.9rem;
  z-index: 3;

  ${TabbedList} {
    opacity: 0;
  }

  &:hover {
    ${Details} {
      transform: scale(${HOVER_SCALE}, ${HOVER_SCALE});
      border-radius: 0.7rem 0.7rem 0 0;
      background-color: transparent;
      z-index: 4;
    }

    ${Image} {
      border-radius: 1rem 1rem 0 0;
      transform: scale(${HOVER_SCALE - 0.005}, ${HOVER_SCALE});
      z-index: 3;
    }

    ${TabbedList} {
      opacity: 1;
    }

    ${RevealContent} {
      transform: translateY(0);
    }

    ${Overlay} {
      opacity: 1;
    }
  }

  ${M.MEDIA_MEDIUM} {
    ${Details} {
      padding-top: 0.8rem;
      padding-bottom: 1rem;
    }

    &:hover {
      ${Details} {
        transform: translateY(-2.5rem) scale(${HOVER_SCALE}, ${HOVER_SCALE});
        background-color: ${({ theme }) => theme.colors.background};
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        z-index: 4;
      }

      ${Reveal} {
        height: 2.5rem;
        border-radius: 0 0 1.2rem 1.2rem; 
        overflow: visible;
        transform: scale(${HOVER_SCALE - 0.001}, ${HOVER_SCALE});
        z-index: 4;
      }

      ${Overlay} {
        ${({ theme }) => css`
          background: linear-gradient(to bottom, ${transparentize(0.2, theme.colors.primary)} 0, ${transparentize(1, theme.colors.primary)} 50%);
        `};
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