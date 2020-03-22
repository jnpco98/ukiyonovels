import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, headingDecoration } from '../../../utilities/mixins';
import { margin } from 'polished';
import { SectionTitle } from '../../atom/text/style';
import { BarContainer } from '../../atom/bar/style';
import Text, { TextType } from '../../atom/text';

export const RatingListContainer = styled.div`
  width: 100%;
  
  ${BarContainer} {
    margin-bottom: 0.5rem;
  }

  ${M.MEDIA_XSMALL} {    
    ${BarContainer} {
      margin-bottom: 0.8rem;
    }
  }
  
  ${M.MEDIA_LARGE} {
    ${BarContainer} {
      margin-bottom: 1rem;
    }
  }
`;

export const RatingListHeading = styled(Text).attrs({ textType: TextType.SubsectionTitle })`
  ${headingDecoration};
  text-align: center;
  position: relative;
  width: 100%;
  overflow: hidden;

  ${M.MEDIA_XSMALL} { 
    margin-bottom: 0.8rem;
  }

  ${M.MEDIA_MEDIUM} { 
    margin-bottom: 1.2rem;
    margin-top: 2rem;
  }
  
  ${M.MEDIA_LARGE} {
    margin-bottom: 1.5rem;
  }
`