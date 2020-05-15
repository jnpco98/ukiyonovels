import styled, { css } from 'styled-components';
import {
  pageTitleFontSize,
  sectionFontSize,
  subsectionFontSize,
  regularFontSize,
  headingDecoration
} from '@utilities/mixins';
import { margin } from 'polished';

const textCommons = css<{ center?: boolean }>`
  ${props => props.center && css`
    text-align: center;
  `}
`;

export const PageTitle = styled.h1<{ decorate: boolean }>`
  ${pageTitleFontSize};
  ${textCommons};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};

  ${margin('1.4rem', null, '1.4rem', null)};

  ${(props) => props.decorate && headingDecoration};
`;

export const SectionTitle = styled.h2<{ decorate: boolean }>`
  ${sectionFontSize};
  ${textCommons};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
  ${margin('0.7rem', null, '0.7rem', null)};

  ${(props) => props.decorate && headingDecoration};
`;

export const SubsectionTitle = styled.h3`
  ${subsectionFontSize};
  ${textCommons};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
  ${margin('1rem', null, '1rem', null)};
`;

export const Paragraph = styled.p`
  ${regularFontSize};
  ${textCommons};

  ${margin('0.2rem', null, '0.2rem', null)};
`;

export const Span = styled.span`
  ${regularFontSize};
  ${textCommons};

  ${margin('0.2rem', null, '0.2rem', null)};
`;

export const Anchor = styled.a<{ active?: boolean, decorateActive?: boolean }>`
  ${regularFontSize};
  ${textCommons};

  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  overflow: hidden;

  &:after {
    width: 100%;
    height: 0.0625rem;
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-120%);
    transition: all 0.3s ease;
  }

  &:hover {
    &:after {
      transform: translateX(0%);
    }
  }

  ${props => 
    props.active && props.decorateActive && css`
      &:after {
        transform: translateX(0);
      }
    `};

  ${margin('0.2rem', null, '0.2rem', null)};
`;

export const Label = styled.label`
  ${regularFontSize};
  ${textCommons};

  ${margin('0.2rem', null, '0.2rem', null)};
`;
