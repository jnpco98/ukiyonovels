import styled from 'styled-components/macro';
import { Paragraph, Anchor } from '../text/style';

export const RowTitle = styled(Anchor)`
  font-family: ${({ theme }) => theme.font.secondary};
  position: relative;

  &.is-bulleted {
    margin-left: 0.7rem;
    
    &:before {
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      background: ${({ theme, ...props }) => theme.colors.accent};
      top: 50%;
      left: -0.7rem;
      transform: translateY(-50%);
    }
  }
`;

export const RowCount = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.secondary};
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  &.is-decorated:hover {
    ${RowTitle}, ${RowCount} {
      text-decoration: underline;
    }
  }
`;