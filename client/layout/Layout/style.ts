import styled, { css } from 'styled-components';
import * as M from 'utilities/media'
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '@utilities/mixins';
import { Layout } from '.';

export const PrimarySecondary = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ${M.MEDIA_MEDIUM} {
    & > *:nth-child(1) {
      flex: 0.7;
    }

    & > *:nth-child(2) {
      flex: 0.3;
    }
  }
`;

export const SecondaryPrimary = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ${M.MEDIA_MEDIUM} {
    & > *:nth-child(1) {
      flex: 0.3;
    }

    & > *:nth-child(2) {
      flex: 0.7;
    }
  }
`;

export const Equal = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${M.MEDIA_MEDIUM} {
    & > * {
      width: 50%;
    }

    & > *:nth-child(1) {
      margin-right: 0.7rem;
    }

    & > *:nth-child(2) {
      margin-left: 0.7rem;
    }
  }
`;

export const Container = styled.section<{ layoutType: Layout, navOffset: boolean, footerOffset: boolean }>`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  
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
