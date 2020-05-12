import styled, { css } from 'styled-components';
import { center, FLEX_ALIGN_MAIN } from '@utilities/mixins';
import * as M from '@utilities/media';
import { ButtonType } from '.';

type ButtonProps = {
  buttonType?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
};

const Success = css`
  color: ${({ theme }) => theme.colors.backgroundTertiary};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.backgroundTertiary};
    background-color: ${({ theme }) => theme.colors.success};
  }
`;

const Warning = css`
  color: ${({ theme }) => theme.colors.backgroundTertiary};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.backgroundTertiary};
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;

const Danger = css`
  color: ${({ theme }) => theme.colors.backgroundTertiary};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.backgroundTertiary};
    background-color: ${({ theme }) => theme.colors.error};
  }
`;

export const Container = styled.a<ButtonProps>`
  ${center(FLEX_ALIGN_MAIN)};
  color: ${({ theme }) => theme.colors.backgroundTertiary};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.6rem 1.4rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.secondary};
  border-radius: 0.3rem;
  text-align: center;
  justify-content: center;
  transition: background 0.2s ease;

  ${(props) =>
    props.loading
      ? css`
          padding: 0.3rem 1.4rem;
        `
      : css`
          padding: 0.6rem 1.4rem;

          ${M.MEDIA_SMALL} {
            padding: 0.7rem 1.5rem;
            font-size: 0.75rem;
          }

          ${M.MEDIA_LARGE} {
            padding: 0.75rem 2rem;
            font-size: 0.8rem;
          }
        `};

  ${(props) => props.buttonType === ButtonType.Success && Success};
  ${(props) => props.buttonType === ButtonType.Warning && Warning};
  ${(props) => props.buttonType === ButtonType.Error && Danger};

  border: none;

  ${(props) =>
    props.disabled
      ? css`
          background: none;
          border: 1px solid ${({ theme }) => theme.colors.default};
        `
      : css`
          &:hover {
            background-color: ${({ theme }) => theme.colors.primaryHover};
          }
        `};
`;
