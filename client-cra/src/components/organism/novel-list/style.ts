import styled from 'styled-components/macro';
import { RowContainer } from '../../atom/row/style';

export const NovelListContainer = styled.div`
  width: 100%;

  ${RowContainer} {
    padding: 0.4rem 0.8rem;

    &:nth-child(odd) {
      background: ${({ theme, ...props }) => theme.colors.default};
    }

    &:nth-child(even) {
      background: ${({ theme, ...props }) => theme.colors.defaultSubdued};
    }

    &:hover {
      color: ${({ theme, ...props }) => theme.colors.background};
      background: ${({ theme, ...props }) => theme.colors.primary};
    }
  }
`;
