import styled, { css } from 'styled-components/macro';
import { center, FLEX_ALIGN_BOTH } from '../../../utilities/mixins';

type BackdropProps = {
  active: boolean;
};

export const BackdropContainer = styled.div<BackdropProps>`
  top: 0;
  left: 0;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.colors.backdrop};
  transform: translateY(-100%);

  &.is-transparent {
    background: transparent;
  }

  &.is-content-centered {
    ${center(FLEX_ALIGN_BOTH)};
  }

  ${props =>
    props.active &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}
`;
