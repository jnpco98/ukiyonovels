import styled, { css } from 'styled-components/macro';
import { rgba, math } from 'polished';
import * as M from '../../../settings/media';
import { Link } from 'react-router-dom';

export const cardDimRatio = 1.5;

export const ThumbnailContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  transform: translateY(80%);
  transition: all 0.2s ease-in;
  background: ${({ theme, ...props }) => rgba(theme.colors.black, 0.5)};
  color: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  padding: 0.2rem;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ThumbnailContainer = styled(Link)`
  position: relative;
  width: 6.2rem;
  height: ${math(`6.2rem * ${cardDimRatio}`)};
  overflow: hidden;
  transition: all 0.15s ease-in;

  &:hover {
    transform: scale(1.1);
    z-index: 1;

    ${ThumbnailContent} {
      transform: translateY(0);
    }  
  }

  ${M.MEDIA_SMALL} {
    width: 8.5rem;
    height: ${math(`8.5rem * ${cardDimRatio}`)};
  }

  ${M.MEDIA_MEDIUM} {
    width: 9rem;
    height: ${math(`9rem * ${cardDimRatio}`)};
  }

  ${M.MEDIA_XLARGE} {
    width: 10rem;
    height: ${math(`10rem * ${cardDimRatio}`)};
  }
`;