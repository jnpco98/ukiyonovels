import styled, { css } from 'styled-components/macro';
import { ButtonType } from './index';
import { center, FLEX_ALIGN_MAIN } from '../../../utilities/mixins';
import * as M from '../../../settings/media';
import { Link } from 'react-router-dom';

type ButtonProps = {
  buttonType?: ButtonType;
}

const Success = css`
  color: ${({ theme }) => theme.colors.successCompliment};
  background-color: ${({ theme  }) => theme.colors.success};
  
  &:hover {
    color: ${({ theme }) => theme.colors.success};
    background-color: ${({ theme  }) => theme.colors.successCompliment};
  }
`;

const Warning = css`
  color: ${({ theme }) => theme.colors.warningCompliment};
  background-color: ${({ theme }) => theme.colors.warning};
  
  &:hover {
    color: ${({ theme }) => theme.colors.warning};
    background-color: ${({ theme }) => theme.colors.warningCompliment};
  }
`;

const Danger = css`
  color: ${({ theme }) => theme.colors.errorCompliment};
  background-color: ${({ theme }) => theme.colors.error};
  
  &:hover {
    color: ${({ theme }) => theme.colors.error};
    background-color: ${({ theme }) => theme.colors.errorCompliment};
  }
`;

export const ButtonContainer = styled(Link)<ButtonProps>`
  ${center(FLEX_ALIGN_MAIN)};
  color: ${({ theme }) => theme.colors.infoCompliment};
  background-color: ${({ theme }) => theme.colors.info};
  border: 2px solid ${({ theme }) => theme.colors.infoCompliment};
  padding: 0.6rem 1.2rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  transition: all 0.1s ease-in;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.info};
    background-color: ${({ theme }) => theme.colors.infoCompliment};
  }

  ${props => props.buttonType === ButtonType.Success && Success};
  ${props => props.buttonType === ButtonType.Warning && Warning};
  ${props => props.buttonType === ButtonType.Error && Danger};
  
  &.is-flat {
    border: none;
  }
  
  ${M.MEDIA_SMALL} {
    padding: 0.7rem 1.5rem;
    font-size: 0.75rem;
  }

  ${M.MEDIA_LARGE} {
    padding: 0.75rem 2rem;
    font-size: 0.8rem;
  }
`;