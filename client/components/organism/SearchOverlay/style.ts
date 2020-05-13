import styled from 'styled-components';
import Backdrop from '@components/atom/Backdrop';

export const Container = styled(Backdrop)<{ centerContent: boolean }>`
  background: ${({ theme }) => theme.colors.backdrop};
  transition: all 0.1s ease;
`;
