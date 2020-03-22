import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import RatingList from '../rating-list';
import QuickSearch from '../quick-search';

export const SidePanelContainer = styled.div`
  width: 100%;
`;

export const SidePanelRatings = styled(RatingList)`
  margin-bottom: 1.5rem;

  ${M.MEDIA_XXSMALL} {
    margin-bottom: 2rem;
  }

  ${M.MEDIA_XSMALL} {
    margin-bottom: 2.5rem;
  }
`;

export const SidePanelQuickSearch = styled(QuickSearch)`
  margin-bottom: 1.5rem;
  
  ${M.MEDIA_XXSMALL} {
    margin-bottom: 2rem;
  }

  ${M.MEDIA_XSMALL} {
    margin-bottom: 2.5rem;
  }
`;