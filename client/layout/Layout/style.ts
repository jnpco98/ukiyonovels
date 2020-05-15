import styled, { css } from 'styled-components';
import * as M from 'utilities/media'
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '@utilities/mixins';
import { Layout } from '.';

export const PrimarySecondary = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    width: 100%;
  }
  
  ${M.MEDIA_MEDIUM} {
    flex-direction: row;

    & > *:nth-child(1) {
      width: 65%;
    }

    & > *:nth-child(2) {
      width: 35%;
    }
  }
`;

export const SecondaryPrimary = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  & > * {
    width: 100%;
  }
  
  ${M.MEDIA_MEDIUM} {
    flex-direction: row;

    & > *:nth-child(1) {
      width: 35%;
    }

    & > *:nth-child(2) {
      width: 65%;
    }
  }
`;

export const Equal = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  & > * {
    width: 100%;
  }

  ${M.MEDIA_MEDIUM} {
    flex-direction: row;

    & > * {
      width: 50%;
    }
  }
`;

export const Container = styled.section<{ layoutType: Layout, navOffset: boolean, footerOffset: boolean, main: boolean, gutterLeft: boolean, gutterRight: boolean }>`
  ${props => props.main && css`
    ${gutter(GUTTER_LEFT)};
    ${gutter(GUTTER_RIGHT)};
  `}

  max-width: ${({ theme }) => theme.screen.innerMaxWidth};
  margin-left: auto;
  margin-right: auto;

  ${props => 
    props.layoutType === 'primarySecondary' ? PrimarySecondary :
    props.layoutType === 'secondaryPrimary' ? SecondaryPrimary :
    props.layoutType === 'equal' ? Equal :
    ''
  }

  ${(props) =>
    props.navOffset &&
    css`
      padding-top: 9rem;
    `};

  ${(props) =>
    props.footerOffset &&
    css`
      padding-bottom: 9rem;
    `};

  ${M.MEDIA_MEDIUM} {
    ${props => props.gutterLeft && css`margin-left: 1.5rem;`};
    ${props => props.gutterRight && css`margin-right: 1.5rem;`};
  }

  ${M.MEDIA_LARGE} {
    ${props => props.gutterLeft && css`margin-left: 2rem;`};
    ${props => props.gutterRight && css`margin-right: 2rem;`};
  }

  ${M.MEDIA_LARGE} {
    ${(props) =>
      props.navOffset &&
      css`
        padding-top: 12rem;
      `};

    ${(props) =>
      props.footerOffset &&
      css`
        padding-bottom: 12rem;
      `};
  }
`;
