import styled, { css } from 'styled-components';
import TextAreaAutoResize from 'react-autosize-textarea';
import { regularFontSize } from '@utilities/mixins';

export const TextArea = styled(TextAreaAutoResize)<{ bordered: boolean }>`
  ${regularFontSize};
  ${({ theme, ...props }) =>
    props.bordered &&
    css`
      border: 0.0625rem solid ${theme.colors.border};
      border-radius: 0.2rem;

      &:hover,
      &:focus {
        border-color: ${theme.colors.borderHover};
        box-shadow: 0 0 0 0.065rem ${theme.colors.borderHover};
      }
    `};
  padding: 0.5rem;
  resize: none;
`;

export const Input = styled.input<{ bordered: boolean }>`
  ${regularFontSize};

  ${({ theme, ...props }) =>
    props.bordered &&
    css`
      border: 0.0625rem solid ${theme.colors.border};
      border-radius: 0.2rem;

      &:hover,
      &:focus {
        border-color: ${theme.colors.borderHover};
        box-shadow: 0 0 0 0.065rem ${theme.colors.borderHover};
      }
    `};
  padding: 0.5rem;
`;
