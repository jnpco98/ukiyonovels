import styled, { css } from 'styled-components';
import * as M from '@utilities/media';

type DrawerProps = {
  sidenavActive: boolean;
};

export const SideDrawerContainer = styled.div<DrawerProps>`
  position: fixed;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 5;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: 17rem;

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
`;
