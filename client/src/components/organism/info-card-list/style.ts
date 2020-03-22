import styled from 'styled-components/macro';
import InfoCard from '../../molecule/info-card';
import * as M from '../../../settings/media';
import { margin } from 'polished';
import Text, { TextType } from '../../atom/text';

export const CardListContainer = styled.div`
  margin: 0.65rem 0;

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
  }

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2rem', null, '2rem', null)};
  }
  
  ${M.MEDIA_LARGE} {
    ${margin('2.5rem', null, '2.5rem', null)};
  }
`;

export const CardListItem = styled(InfoCard)`
  margin-bottom: 2rem;
  position: relative;

  &:not(:last-child) {
    &:after {
      content: '';
      width: 100%;
      height: 1px;
      background:  ${({ theme, ...props }) => theme.colors.primary};
      position: absolute;
      bottom: -1rem;
      left: 0;
    }
  }
`;
