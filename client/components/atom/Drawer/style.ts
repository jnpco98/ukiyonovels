import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import * as M from '@utilities/media';

export const Container = styled.div<{ sidenavActive: boolean }>`
  position: fixed;
  ${({ theme }) => css`
    background: linear-gradient(to right, ${transparentize(0.2, theme.colors.background)} 0%, ${transparentize(0.7, theme.colors.background)} 30%, ${transparentize(1, theme.colors.background)} 100%);
  `};
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 5;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  li {
    white-space: nowrap;
  }

  ${props =>
    props.sidenavActive
      ? css`
          opacity: 1;
          transform: translateX(0);
        `
      : css`
          opacity: 0;
          transform: translateX(-100%);
        `};

  ${M.MEDIA_XXSMALL} {
    max-width: 23rem;
  }

  ${M.MEDIA_XSMALL} {
    max-width: 28rem;
  }

  ${M.MEDIA_SMALL} {
    max-width: 28rem;
  }

  ${M.MEDIA_MEDIUM} {
    max-width: 45rem;
  }

  ${M.MEDIA_LARGE} {
    max-width: 50%;
  }
`;
