import styled, { css } from 'styled-components';
import {
  pageTitleFontSize,
  sectionFontSize,
  subsectionFontSize,
  regularFontSize,
  headingDecoration
} from '@utilities/mixins';
import { margin } from 'polished';

export const pageTitleStyle = css`
  ${pageTitleFontSize};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
  ${margin('1.4rem', null, '1.4rem', null)};
`;

export const sectionTitleStyle = css`
  ${sectionFontSize};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
  ${margin('0.7rem', null, '0.7rem', null)};
`;

export const subsectionTitleStyle = css`
  ${subsectionFontSize};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
  ${margin('1rem', null, '1rem', null)};
`;

export const regularTextStyle = css`
  ${regularFontSize};
  ${margin('0.2rem', null, '0.2rem', null)};
`;

export const anchorTextStyle = css`
  ${regularTextStyle};
  display: inline-block;

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
`;

export const PageTitle = styled.h1<{ decorate: boolean }>`
  ${pageTitleStyle};
  ${(props) => props.decorate && headingDecoration};
`;

export const SectionTitle = styled.h2<{ decorate: boolean }>`
  ${sectionTitleStyle};
  ${(props) => props.decorate && headingDecoration};
`;

export const SubsectionTitle = styled.h3`
  ${subsectionTitleStyle};
`;

export const Paragraph = styled.p`
  ${regularTextStyle};
`;

export const Span = styled.span`
  ${regularTextStyle};
`;

export const Label = styled.label`
  ${regularTextStyle};
`;

export const Anchor = styled.a<{ active?: boolean, decorateActive?: boolean }>`
  ${anchorTextStyle};

  ${props => 
    props.active && props.decorateActive && css`
      &:after {
        transform: translateX(0);
      }
    `};
`;

