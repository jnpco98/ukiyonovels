import styled, { css } from 'styled-components/macro';
import { lighten } from 'polished';
import { center, CENTER_VERTICAL } from '../../../utilities/mixins';
import Simplebar from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

type IconStyleProps = {
  active?: boolean;
}

export const SelectIcon = styled(FontAwesomeIcon).attrs({ icon: faCaretRight })<IconStyleProps>`
  ${center(CENTER_VERTICAL)};
  right: 0.5rem;
  transition: all 0.2s ease-in;
  
  ${props =>
    props.active &&
      css`
        transform: translateY(-50%) rotate(90deg);
      `
    }
`;

type ContainerStyleProps = {
  width?: string;
}

export const SelectContainer = styled.div<ContainerStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || `100%`};
  position: relative;
`;

type OptionsContainerStyleProps = {
  active?: boolean;
  height?: string;
  autoHide?: boolean;
}

export const SelectOptionsContainer = styled(Simplebar)<OptionsContainerStyleProps>`
  width: 100%;
  background: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  color: ${({ theme, ...props }) => theme.colors.accent};
  border-radius: 0.5rem;
  overflow: hidden;
  opacity: 0;
  max-height: 0;
  transition: all 0.4s ease-in-out;
  position: absolute !important;
  z-index: 1;
  top: 100%;

  ${props =>
    props.active && 
      css`
        opacity: 1;
        max-height: ${props.height || `15rem`};
        overflow-y: visible;
      `
    }
`;

export const SelectOptionSelected = styled.div`
  position: relative;
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  width: 100%;
  background: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  color: ${({ theme, ...props }) => theme.colors.accent};
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
`;

export const SelectOptionInput = styled.input.attrs({ type: "radio", hidden: true })`
  cursor: pointer;
`;

export const SelectOptionLabel = styled.label`
  cursor: pointer;
`;

type OptionStyleProps = {
  selected?: boolean;
}

export const SelectOption = styled.div<OptionStyleProps>`
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme, ...props }) => lighten(0.05, theme.colors.accent)};
    ${SelectOptionLabel} {
      color: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
    }
  }

  ${props =>
    props.selected &&
      css`
        background: ${({ theme, ...props }) => lighten(0.05, theme.colors.accent)};
        ${SelectOptionLabel} {
          color: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
        }
      `
    }
`;