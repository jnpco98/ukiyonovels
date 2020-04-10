import styled from 'styled-components';
import Backdrop from '../../atom/backdrop';

export const SearchOverlayContainer = styled(Backdrop)`
  background: ${({ theme }) => theme.colors.backdrop};
  transition: all 0.4s ease;
`;
