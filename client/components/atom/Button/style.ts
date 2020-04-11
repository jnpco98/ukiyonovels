import styled, { css } from 'styled-components';
import { ButtonType } from '.';
import { center, FLEX_ALIGN_MAIN } from '@utilities/mixins';
import * as M from '@utilities/media';

type ButtonProps = {
  buttonType?: ButtonType;
};

const Success = css`
  color: ${({ theme }) => theme.colors.success};
  background-color: ${({ theme }) => theme.colors.default};

  &:hover {
    color: ${({ theme }) => theme.colors.success};
    background-color: ${({ theme }) => theme.colors.default};
  }
`;

const Warning = css`
  color: ${({ theme }) => theme.colors.warning};
  background-color: ${({ theme }) => theme.colors.default};

  &:hover {
    color: ${({ theme }) => theme.colors.warning};
    background-color: ${({ theme }) => theme.colors.default};
  }
`;

const Danger = css`
  color: ${({ theme }) => theme.colors.error};
  background-color: ${({ theme }) => theme.colors.default};

  &:hover {
    color: ${({ theme }) => theme.colors.error};
    background-color: ${({ theme }) => theme.colors.default};
  }
`;

export const Container = styled.a<ButtonProps>`
  ${center(FLEX_ALIGN_MAIN)};
  color: ${({ theme }) => theme.colors.info};
  background-color: ${({ theme }) => theme.colors.default};
  border: 2px solid ${({ theme }) => theme.colors.default};
  padding: 0.6rem 1.2rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  transition: all 0.1s ease-in;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.info};
    background-color: ${({ theme }) => theme.colors.default};
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