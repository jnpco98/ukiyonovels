import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SubsectionTitle } from '@components/atom/Text/style';
import { regularFontSize } from '../../../utilities/mixins';
import * as M from '@utilities/media';
import { padding } from 'polished';

export const Tabs = styled.div`
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
`;

export const Tab = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

type LabelStyleProps = {
  for: string;
};

export const Label = styled.label<LabelStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.default};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.default};
  }

  ${M.MEDIA_XLARGE} {
    padding: 1.2rem;
  }
`;

export const Text = styled(SubsectionTitle)`
  ${regularFontSize};
  margin: 0;

  ${M.MEDIA_SMALL} {
    margin: 0;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0;
  }
`;

export const Icon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  font-size: 0.7rem;
  transition: all 0.3s ease;

  ${M.MEDIA_XLARGE} {
    font-size: 0.9rem;
  }
`;

export const Content = styled.div`
  max-height: 0;
  color: black;
  background: ${({ theme }) => theme.colors.background};
  transition: all 0.25s;
  overflow: hidden;
  opacity: 0;
`;

export const Trigger = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked {
    + ${Label} {
      background: ${({ theme }) => theme.colors.default};

      ${Icon} {
        transform: rotate(90deg);
      }
    }

    ~ ${Content} {
      max-height: 30rem;
      padding: 1rem;
      opacity: 1;
    }
  }

  ${M.MEDIA_LARGE} {
    &:checked {
      ~ ${Content} {
        padding: 1.5rem 2rem;
      }
    }
  }
`;

type AccordionStyleProps = {
  flat?: boolean;
};

export const Container = styled.div<AccordionStyleProps>`
  width: 100%;

  ${({ theme, ...props }) =>
    props.flat &&
    css`
      ${Tabs} {
        box-shadow: none;
        border-radius: 0;
      }

      ${Label} {
        background: ${theme.colors.background};
        color: ${theme.colors.default};
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        ${padding(null, 0)};
      }

      ${Trigger}:checked {
        + ${Label} {
          background: ${({ theme }) => theme.colors.background};
        }
        ~ ${Content} {
          ${padding(null, 0)};
        }
      }
      
      ${M.MEDIA_XLARGE} {
        ${Label},
        ${Trigger}:checked ~ ${Content} {
          ${padding(null, 0)};
        }
      }
    `};
`;
