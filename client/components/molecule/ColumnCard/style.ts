import styled from 'styled-components';
import Text, { TextType } from '@components/atom/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { center, CENTER_VERTICAL, pageTitleFontSize, regularFontSize, CENTER_BOTH } from '@utilities/mixins';
import { smallFontSize, xSmallFontSize } from '@utilities/mixins';
import * as M from '@utilities/media';

const INITIAL_WIDTH = 22;

export const CARD_RATIO = 0.5;

export const Container = styled.div`
  width: ${INITIAL_WIDTH}rem;
  height: ${INITIAL_WIDTH * CARD_RATIO}rem;

  ${M.MEDIA_SMALL} {
    width: ${INITIAL_WIDTH * 1.2}rem;
    height: ${INITIAL_WIDTH * 1.2 * CARD_RATIO}rem;
  }
  margin-bottom: 6rem;
  margin-right: 1rem;
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

export const DetailsTitle = styled(Text).attrs({ textType: TextType.Anchor })`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
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
  color: ${({ theme }) => theme.colors.primary};
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

export const Meta = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  width: 5rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ReleaseDate = styled.p`
  ${regularFontSize};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Rating = styled.p`
  ${pageTitleFontSize};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Overlay = styled.a`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary} 0, rgba(0, 0, 0, 0) 50%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease;
  opacity: 0;
`;

export const PlayIcon = styled(FontAwesomeIcon).attrs({ icon: faPlayCircle })`
  ${center(CENTER_BOTH)};
  opacity: 0;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background};
  transition: all 0.15s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.2, 1.2);
  }
`;

export const Content = styled.div`
  margin: 1rem 0.3rem 1.2rem;
  border-radius: 0.3rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    ${Overlay}, ${PlayIcon} {
      opacity: 1;
    }

    ${Image} {
      border-radius: 1rem;
    }
  }
`;

export const CtaIcon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  ${center(CENTER_VERTICAL)};
  width: 1rem;
  height: 1rem;
  right: 0.5rem;
`;