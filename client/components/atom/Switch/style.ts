import styled from 'styled-components';
import { transparentize } from 'polished';
import Text, { TextType } from '../Text';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 3rem;
  height: 1.5rem;
  appearance: none;
  background: ${({ theme }) => theme.colors.disabled};
  border-radius: 1rem;
  box-shadow: inset 0 0 0.1rem ${({ theme }) => transparentize(0.8, theme.colors.default)};
  transition: 0.5s ease;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 0;
    left: -0.0625rem;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 50%;
    transform: scale(1.1);
    transition: 0.5s ease;
  }

  &:checked {
    background: ${({ theme }) => theme.colors.primary};

    &:before {
      left: 1.5625rem;
    }
  }
`;

export const Label = styled(Text).attrs({ textType: TextType.Label })`
  margin-right: 1rem;
`;
