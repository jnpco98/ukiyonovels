import styled, { css } from 'styled-components/macro';
import { pageTitleFontSize, sectionFontSize, subsectionFontSize, regularFontSize, headingDecoration } from '../../../utilities/mixins';
import * as M from '../../../settings/media';
import { margin } from 'polished';
import TextAreaAutoResize from 'react-autosize-textarea';
import { Link as RouterLink } from 'react-router-dom';

type HeadingStyleProps = {
  clearDecoration?: boolean;
}

export const PageTitle = styled.h1<HeadingStyleProps>`
  ${pageTitleFontSize};
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
  text-transform: uppercase;

  ${margin('1.4rem', null, '1.4rem', null)};

  ${M.MEDIA_SMALL} {
    ${margin('1.7rem', null, '1.7rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2rem', null, '2rem', null)};
  }

  ${props => 
    !props.clearDecoration 
      && headingDecoration 
    };
`;

export const SectionTitle = styled.h2<HeadingStyleProps>`
  ${sectionFontSize};

  font-family: ${({ theme, ...props }) => theme.font.secondary};
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
  text-transform: uppercase;
  ${margin('1rem', null, '1rem', null)};

  ${M.MEDIA_SMALL} {
    ${margin('1.7rem', null, '1.7rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2rem', null, '2rem', null)};
  }

  ${props => 
    !props.clearDecoration 
      && headingDecoration 
    };
`;

export const SubsectionTitle = styled.h3`
  ${subsectionFontSize};
  text-transform: uppercase;
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
  ${margin('1rem', null, '1rem', null)};

  ${M.MEDIA_SMALL} {
    ${margin('1.2rem', null, '1.2rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }
`;

export const Paragraph = styled.p`
  ${regularFontSize};

  ${margin('0.2rem', null, '0.2rem', null)};

  ${M.MEDIA_MEDIUM} {
    ${margin('0.4rem', null, '0.4rem', null)};
  }
`;

export const Span = styled.span`
  ${regularFontSize};

  ${margin('0.2rem', null, '0.2rem', null)};

  ${M.MEDIA_MEDIUM} {
    ${margin('0.4rem', null, '0.4rem', null)};
  }
`;

export const Link = styled(RouterLink)`
  ${regularFontSize};

  ${margin('0.2rem', null, '0.2rem', null)};

  ${M.MEDIA_MEDIUM} {
    ${margin('0.4rem', null, '0.4rem', null)};
  }
`;

export const Anchor = styled.a`
  ${regularFontSize};

  ${margin('0.2rem', null, '0.2rem', null)};

  ${M.MEDIA_MEDIUM} {
    ${margin('0.4rem', null, '0.4rem', null)};
  }
`;

export const Label = styled.label`
  ${regularFontSize};

  ${margin('0.2rem', null, '0.2rem', null)};

  ${M.MEDIA_MEDIUM} {
    ${margin('0.4rem', null, '0.4rem', null)};
  }
`;