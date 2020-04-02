import styled from 'styled-components/macro';
import { Paragraph, Link } from '../text/style';
import { regularFontSize } from '../../../utilities/mixins';

export const RowTitle = styled(Link)`
  font-family: ${({ theme }) => theme.font.secondary};
  position: relative;

  ${regularFontSize()}

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