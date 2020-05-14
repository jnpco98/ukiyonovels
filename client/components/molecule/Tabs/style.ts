import styled from 'styled-components';
import { xSmallFontSize } from '@utilities/mixins';

export const Item = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 0.1rem 0.4rem;
  border-radius: 1rem;
  margin-bottom: 0.15rem;

  &:nth-child(odd) {
    margin-right: 0.3rem;
  }
`;

export const Container = styled.div`
  ${xSmallFontSize};
  display: block;
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.colors.primary};
`;