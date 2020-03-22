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
      background: ${({ theme, ...props }) => theme.colors.subdued};
    }
    
    &:hover {
      color: ${({ theme, ...props }) => theme.colors.white};
      background: ${({ theme, ...props }) => theme.colors.accent};
    }
  }
`;