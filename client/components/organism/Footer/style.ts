import styled from 'styled-components';
import { Anchor } from '@components/atom/Text/style';
import * as M from '@utilities/media';

export const Container = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  margin-top: 2rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.default};
  margin-bottom: 0.5rem;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${M.MEDIA_SMALL} {
    flex-direction: row;
  }
`;

export const TermsGroup = styled.div`
  display: flex;

  ${Anchor}:after {
    content: none;
  }
  
  ${Anchor} + ${Anchor} {
    margin-left: 0.8rem;
  }

  ${M.MEDIA_XSMALL} {
    ${Anchor}:after {
      content: '';
    }
  }

  ${M.MEDIA_SMALL} {
    margin-left: 2rem;
  }
`;
