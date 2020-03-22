import styled, { css } from 'styled-components/macro';
import { SubsectionTitle } from '../../atom/text/style';
import { regularFontSize } from '../../../utilities/mixins';
import * as M from '../../../settings/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { padding } from 'polished';

export const AccordionTabs = styled.div`
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
`;

export const AccordionTab = styled.div`
  width: 100%;
  color: ${({ theme, ...props }) => theme.colors.background};
  overflow: hidden;
`;

type LabelStyleProps = {
  for: string;
}

export const AccordionTabLabel = styled.label<LabelStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme, ...props }) => theme.colors.accent};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${({ theme, ...props }) => theme.colors.accent};
  }

  ${M.MEDIA_XLARGE} {
    padding: 1.2rem;
  }
`;

export const AccordionTabLabelText = styled(SubsectionTitle)`
  ${regularFontSize};
  margin: 0;

  ${M.MEDIA_SMALL} {
    margin: 0;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0;
  }
`;

export const AccordionTabLabelIcon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  font-size: 0.7rem;
  transition: all 0.3s ease;

  ${M.MEDIA_XLARGE} {
    font-size: 0.9rem;
  }
`;

export const AccordionContent = styled.div`
  max-height: 0;
  color: black;
  background: ${({ theme, ...props }) => theme.colors.white};
  transition: all .25s;
  overflow: hidden;
  opacity: 0;
`;

export const AccordionTabTrigger = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked {
    + ${AccordionTabLabel} {
      background: ${({ theme, ...props }) => theme.colors.accent};

      ${AccordionTabLabelIcon} {
        transform: rotate(90deg);
      }
    }

    ~ ${AccordionContent} {
      max-height: 30rem;
      padding: 1rem;
      opacity: 1;
    }
  }
  
  ${M.MEDIA_LARGE} {
    &:checked {
      ~ ${AccordionContent} {
        padding: 1.5rem 2rem;
      }
    }
  }
`;

type AccordionStyleProps = {
  flat?: boolean;
}

export const AccordionContainer = styled.div<AccordionStyleProps>`
  width: 100%;
  
  ${({ theme, ...props }) => 
    props.flat && css`
      ${AccordionTabs} {
        box-shadow: none;
        border-radius: 0;
      }

      ${AccordionTabLabel} {
        background: ${theme.colors.white};
        color: ${theme.colors.black};
        border-bottom: 1px solid ${({ theme, ...props }) => theme.colors.subdued};
        ${padding(null, 0)};
      }

      ${AccordionTabTrigger}:checked {
        + ${AccordionTabLabel} {
          background: ${({ theme, ...props }) => theme.colors.white};
        }
        ~ ${AccordionContent} {
          ${padding(null, 0)};
        }
      }
      
      ${M.MEDIA_XLARGE} {
        ${AccordionTabLabel},
        ${AccordionTabTrigger}:checked ~ ${AccordionContent} {
          ${padding(null, 0)};
        }
      }
    `
  };
`;