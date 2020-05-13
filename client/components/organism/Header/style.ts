import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import SideDrawer from '@components/atom/Drawer';
import Text, { TextType } from '@components/atom/Text';
import Hamburger from '@components/atom/Hamburger';
import { center, FLEX_ALIGN_MAIN, gutter, GUTTER_LEFT, GUTTER_RIGHT } from '@utilities/mixins';
import * as M from '@utilities/media';

export const Link = styled(Text).attrs({ textType: TextType.Anchor })<{ decorateActive?: boolean, link: string; }>`
  overflow: hidden;
`;

export const Button = styled(Text).attrs({ textType: TextType.Span })`
  overflow: hidden;

  &:after {
    transition: all 0.3s ease;
  }
`;

export const MenuItem = styled.li<{ icon: boolean }>`
  ${center(FLEX_ALIGN_MAIN)};

  cursor: pointer;
  text-transform: uppercase;
  margin: 0 0.9rem;

  ${Link} {
    position: relative;
  }

  ${props => 
    props.icon && css`
      padding-top: 0;
      margin-right: 0;

      ${Link}, ${Button} {
        width: 1rem;
        height: 1rem;
        font-size: unset;

        &:after {
          content: none;
        }
      }
    `};
    
  ${M.MEDIA_XXSMALL} {
    margin: 0 0.5rem;
  }

  ${M.MEDIA_XSMALL} {
    margin: 0 1rem;

    ${props =>
      props.icon && 
      css`
        padding-top: 0;
        ${Link}, ${Button} {
          width: 1.2rem;
          height: 1.2rem;
        }
      `}
  }
`;

export const DrawerTrigger = styled.li`
  margin: 0 1rem;
`;

export const DrawerTriggerIcon = styled(Hamburger)`
  transition: all 0.3s ease;

  ${M.MEDIA_SMALL} {
    transform: translate(-100vh);
  }
`;

export const Container = styled.header<{ floating: boolean }>`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  position: fixed;
  transition: all 0.2s ease;
  z-index: 50;
  background: transparent;

  max-width: ${({ theme }) => theme.screen.innerMaxWidth};
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;

  & > ul {
    display: flex;
  }

  ${props =>
    props.floating &&
    css`
      font-size: 0.9rem;
      position: fixed;

      ${({ theme }) => css`
        background: linear-gradient(to top, ${transparentize(0.4, theme.colors.primaryCompliment)} 0%, ${transparentize(0, theme.colors.primaryCompliment)} 100%);
        box-shadow: 0 0.3rem 0.8rem -0.5rem ${transparentize(0.2, theme.colors.primaryCompliment)};
      `};
    `};
  
  ${M.MEDIA_XSMALL} {
    ${props => 
      props.floating &&
        css`
          padding: 2rem 0;
        `};
  }

  ${M.MEDIA_SMALL} {
    ${props => 
      props.floating &&
        css`
          padding: 2.5rem 0;
        `};
  }

  ${M.MEDIA_XLARGE} {
    height: 6rem;

    ${props => 
      props.floating &&
        css`
          padding: 3rem 0;
        `};
  }

  ${M.MEDIA_XXLARGE} {
    ${props => 
      props.floating &&
        css`
          padding: 4rem 0;
        `};
  }
`;

export const Drawer = styled(SideDrawer)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 4rem 0;
  overflow-y: auto;

  ${M.MEDIA_XXSMALL} {
    padding-left: 2rem;
  }
`;
