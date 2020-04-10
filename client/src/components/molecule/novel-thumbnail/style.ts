import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import { Paragraph, Span, SubsectionTitle } from '../../atom/text/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { fadeInTextHover, center, CENTER_BOTH, FLEX_ALIGN_BOTH } from '../../../utilities/mixins';
import { transparentize } from 'polished';
import { Link } from 'react-router-dom';

export const NovelThumbnailContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin: auto;
  border-radius: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(22, 22, 34, 0) 0%, rgba(22, 22, 34, 1) 100%);
    width: 100%;
    height: 7rem;
  }

  transition: all 0.3s ease;
`;

export const NovelThumbnailContent = styled.div`
  ${center(FLEX_ALIGN_BOTH)};
  flex-direction: column;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  transform: translateY(100%);
  transition: transform 0.3s ease;
/* 
  ${NovelThumbnailContainer}:hover & {
    background: linear-gradient(to bottom, rgba(22, 22, 34, 0.5) 0%, rgba(22, 22, 34, 1) 100%);
    transform: translateY(0%);
    justify-content: space-around;
  } */
`;

export const NovelThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;

  ${NovelThumbnailContainer}:hover & {
    filter: blur(1px);
  }
`;

export const NovelThumbnailHeading = styled(SubsectionTitle)`
  color: ${({ theme, ...props }) => theme.colors.secondary};
  padding: 0 0.5rem;
  font-size: 0.5rem;

  ${NovelThumbnailContainer}:hover & {
    margin: 0.2rem 0.3rem;
  }

  ${M.MEDIA_XSMALL} {
    font-size: 0.5rem;
  }

  ${M.MEDIA_SMALL} {
    font-size: 0.7rem;
    ${NovelThumbnailContainer}:hover & {
      margin-bottom: 0;
    }
  }

  ${M.MEDIA_XLARGE} {
    font-size: 0.8rem;
  }
`;

export const NovelThumbnailSubtitle = styled(Paragraph)`
  color: ${({ theme, ...props }) => theme.colors.secondary};
  ${fadeInTextHover(NovelThumbnailContainer)};

  ${NovelThumbnailContainer}:hover & {
    margin: 1rem 0.3rem;
    margin-bottom: 0;
  }
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  font-size: 0.5rem;

  ${M.MEDIA_XSMALL} {
    font-size: 0.5rem;
  }

  ${M.MEDIA_SMALL} {
    font-size: 0.6rem;
  }

  ${M.MEDIA_MEDIUM} {
    font-size: 0.7rem;
  }
`;

export const NovelThumbnailGenre = styled(Span)`
  color: ${({ theme, ...props }) => theme.colors.secondary};
  ${fadeInTextHover(NovelThumbnailContainer)};
  font-size: 0.5rem;

  ${NovelThumbnailContainer}:hover & {
    margin-bottom: 1rem;
  }

  ${M.MEDIA_XSMALL} {
    font-size: 0.5rem;
  }

  ${M.MEDIA_SMALL} {
    font-size: 0.6rem;
  }

  ${M.MEDIA_MEDIUM} {
    font-size: 0.7rem;
  }
`;

export const NovelThumbnailReadIconLink = styled(Link)`
  display: none;
  margin: 1rem 0.5rem 0.5rem;
  border-radius: 50%;
  border: 4px solid ${({ theme, ...props }) => transparentize(0.5, theme.colors.secondary)};
  transition: border-color 0.3s ease;

  position: relative;
  padding: 14%;

  &:hover {
    border-color: ${({ theme, ...props }) => theme.colors.secondary};
  }

  ${NovelThumbnailContainer}:hover & {
    display: block;
  }

  ${M.MEDIA_SMALL} {
    border-width: 5px;
  }

  ${M.MEDIA_MEDIUM} {
    border-width: 6px;
  }
`;

export const NovelThumbnailIconWrapper = styled.div`
  ${center(CENTER_BOTH)};
  transform: translate(-50%, -46%);
`;

export const NovelThumbnailReadIcon = styled(FontAwesomeIcon).attrs({ icon: faBookOpen })`
  color: ${({ theme, ...props }) => theme.colors.secondary};
  ${fadeInTextHover(NovelThumbnailContainer)};

  font-size: 0.9rem;

  ${M.MEDIA_SMALL} {
    font-size: 1.1rem;
  }

  ${M.MEDIA_MEDIUM} {
    font-size: 1.5rem;
  }
`;
