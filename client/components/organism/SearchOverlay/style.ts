import styled from 'styled-components';
import Backdrop from '@components/atom/Backdrop';

type OverlayProps = {
  centerContent: boolean;
}

export const Container = styled(Backdrop)<OverlayProps>`
  background: ${({ theme }) => theme.colors.backdrop};
  transition: all 0.1s ease;
`;
