import styled, { css } from 'styled-components';
import { center, FLEX_ALIGN_MAIN, regularFontSize } from '@utilities/mixins';
import { ButtonType } from '.';
import Loader from '@components/atom/Loader';

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

export const Container = styled.a<{ buttonType?: ButtonType, loading?: boolean, disabled?: boolean }>`
  ${regularFontSize};
  ${center(FLEX_ALIGN_MAIN)};

  display: block;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
  padding: 0.7rem 0.9rem 0.65rem;
  font-family: ${({ theme }) => theme.font.primary};
  border-radius: 0.3rem;
  justify-content: center;
  transition: background 0.2s ease;

  ${(props) =>
    props.loading
      ? css`
          padding: 0.3rem 1.4rem;
        `
      : css`
          padding: 0.6rem 1.4rem;
        `};

  ${(props) => props.buttonType === ButtonType.Success && Success};
  ${(props) => props.buttonType === ButtonType.Warning && Warning};
  ${(props) => props.buttonType === ButtonType.Error && Danger};

  ${({ theme, ...props }) =>
    props.disabled
      ? css`
          background: none;
          border: 1px solid ${theme.colors.default};
        `
      : css`
          &:hover {
            color: ${theme.colors.background};
            background-color: ${theme.colors.primary};
            border: 0.0625rem solid ${theme.colors.border};
          }
        `};
`;

export const LoadMoreIcon = styled(Loader)`
  margin: auto;
`;