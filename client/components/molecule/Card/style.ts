import styled, { css } from 'styled-components';
import Text, { TextType } from '@components/atom/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { center, CENTER_VERTICAL } from '@utilities/mixins';

const INITIAL_WIDTH = 13;

export const CARD_RATIO = 1.65;

export const Container = styled.div`
  width: ${INITIAL_WIDTH}rem;
  height: ${INITIAL_WIDTH * CARD_RATIO}rem;
`;

export const Wrapper = styled.div`
  padding: 1rem 0.2rem;
`;

export const Details = styled.div`
  transition: all 0.15s ease;
  padding: 0;
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

  & + & {
    padding-top: 0.3rem;
  }
`;

export const Reveal = styled.div`
  background: ${({ theme }) => theme.colors.background};
  transition: all 0.1s ease;
  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0.0625rem;
  left: 0;
  height: 0;
  z-index: 4;
`;

export const RevealContent = styled.a`
  display: block;
  transform: translateY(-2.2rem);
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.7rem 0.9rem 0.65rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.background};
  margin: 0;
  transition: all 0.15s ease;
  width: 100%;
  box-shadow: 0 -0.0625rem 1.3rem 0 rgba(141, 139, 142, 0.49);
  line-height: 1.43;

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.default};
      border: 0.0625rem solid ${theme.colors.primary};
      box-shadow: 0 0 0.95rem 0 ${theme.colors.primary};
    `};
  }
`;

export const Image = styled.div<{ img: string; }>`
  display: block;
  background: url(${props => props.img}) no-repeat;
  background-size: 100.1%;
  background-position: 50% 50%;
  border-radius: 0.3rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
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
  margin: 0 0.3rem 1.2rem;
  box-shadow: 0 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  position: relative;
  transition: all 0.15s ease;

  &:hover {
    box-shadow: 0 0 0.6rem 0.6rem rgba(0, 0, 0, 0.2);
    border-radius: 0.9rem;
    z-index: 3;

    ${Details} {
      transform: translateY(-2.5rem) scale(1.05, 1.05);
      border-radius: 0.7rem 0.7rem 0 0;
      background-color: ${({ theme }) => theme.colors.background};
      padding-bottom: 0.5rem;
      z-index: 4;
    }

    ${DetailsTitle} {
      color: ${({ theme }) => theme.colors.primary};
      padding: 0.15rem 0.4rem;
    }

    ${Reveal} {
      height: 2.3rem;
      border-radius: 0 0 1.2rem 1.2rem;
      overflow: visible;
      transform: scale(1.05, 1.05);
      z-index: 4;
    }

    ${RevealContent} {
      transform: translateY(0);
    }

    ${Image} {
      box-shadow: 0 0 0.35rem 0.35rem rgba(0, 0, 0, 0.2);
      border-radius: 1rem 1rem 0 0;
      transform: scale(1.05, 1.05);
      z-index: 3;
    }

    ${Overlay} {
      opacity: 1;
    }
  }
`;

export const CtaIcon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  ${center(CENTER_VERTICAL)};
  width: 1rem;
  height: 1rem;
  right: 0.5rem;
`;