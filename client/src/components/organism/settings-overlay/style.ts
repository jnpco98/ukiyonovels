import styled from 'styled-components';
import Backdrop from '../../atom/backdrop';
import { transparentize } from 'polished';

export const SettingsOverlayContainer = styled(Backdrop)`
  background: ${({ theme, ...props }) => transparentize(0.3, theme.colors.black)};
  transition: all 0.4s ease;
`;
