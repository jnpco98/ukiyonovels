import styled from 'styled-components/macro';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, GUTTER_TOP, GUTTER_BOTTOM, pageTitleFontSize, sectionFontSize, subsectionFontSize, regularFontSize, headingDecoration } from '../../../utilities/mixins';
import { SectionTitle } from '../../atom/text/style';
import * as M from '../../../settings/media';
import { margin } from 'polished';

export const StandardPageContainer = styled.div`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  ${gutter(GUTTER_TOP)};
  ${gutter(GUTTER_BOTTOM)};

  h1 {
    ${pageTitleFontSize};
    font-family: ${({ theme, ...props }) => theme.font.secondary};
    font-weight: ${({ theme, ...props }) => theme.font.bold};
    text-transform: uppercase;

    ${margin('1.4rem', null, '1.4rem', null)};

    ${M.MEDIA_SMALL} {
      ${margin('1.7rem', null, '1.7rem', null)};
    }

    ${M.MEDIA_MEDIUM} {
      ${margin('2rem', null, '2rem', null)};
    }
  }

  h2 {  
    ${sectionFontSize};
    font-family: ${({ theme, ...props }) => theme.font.secondary};
    font-weight: ${({ theme, ...props }) => theme.font.bold};
    text-transform: uppercase;
    ${margin('1rem', null, '1rem', null)};

    ${M.MEDIA_SMALL} {
      ${margin('1.7rem', null, '1.7rem', null)};
    }

    ${M.MEDIA_MEDIUM} {
      ${margin('2rem', null, '2rem', null)};
    }
  }

  h3 {
    ${subsectionFontSize};
    text-transform: uppercase;
    font-family: ${({ theme, ...props }) => theme.font.secondary};
    font-weight: ${({ theme, ...props }) => theme.font.bold};
    ${margin('1rem', null, '1rem', null)};

    ${M.MEDIA_SMALL} {
      ${margin('1.2rem', null, '1.2rem', null)};
    }

    ${M.MEDIA_MEDIUM} {
      ${margin('1.5rem', null, '1.5rem', null)};
    }
  }

  p, span, a, label {
    ${regularFontSize};

    ${margin('0.2rem', null, '0.2rem', null)};

    ${M.MEDIA_MEDIUM} {
      ${margin('0.4rem', null, '0.4rem', null)};
    }
  }

  .is-decorated {
    ${headingDecoration()}
  }
`;

export const StandardPageTitle = styled(SectionTitle).attrs({ as: 'h1' })``;
