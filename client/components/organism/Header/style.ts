import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
import { transparentize } from 'polished';
import SideDrawer from '@components/atom/Drawer';
import Text, { TextType } from '@components/atom/Text';
import Hamburger from '@components/atom/Hamburger';
import { center, FLEX_ALIGN_MAIN, gutter, GUTTER_LEFT, GUTTER_RIGHT } from '@utilities/mixins';
import * as M from '@utilities/media';
import Backdrop from '@components/atom/Backdrop';

const DynamicIcon = dynamic(() => import('@components/molecule/DynamicIcon'), { ssr: false });

export const MobileMenuItem = styled.ul`
  display: flex;

  ${M.MEDIA_SMALL} {
    display: none;
  }
`;

export const DesktopMenuItem = styled.ul`
  display: none;

  ${M.MEDIA_SMALL} {
    display: flex;
  }
`;

export const Icon = styled(DynamicIcon)`
  width: 1rem;
  height: 1rem;
`;

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

export const Container = styled.header<{ floating: boolean }>`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  position: relative;
  transition: all 0.2s ease;
  z-index: 50;
  background: transparent;

  max-width: ${({ theme }) => theme.screen.innerMaxWidth};
  margin-left: auto;
  margin-right: auto;
  top: 0;
  right: 0;
  left: 0;

  ${props =>
    props.floating &&
    css`
      font-size: 0.9rem;
      position: fixed;

      ${({ theme }) => css`
        box-shadow: 0 0.3rem 0.8rem -0.5rem ${transparentize(0.2, theme.colors.primaryCompliment)};
      `};
    `};
`;

export const Drawer = styled(SideDrawer)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 4rem 1rem;
  overflow-y: auto;

  ${MenuItem} + ${MenuItem} {
    margin-top: 0.4rem;
  }

  ${M.MEDIA_XXSMALL} {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  ${M.MEDIA_XSMALL} {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  ${M.MEDIA_SMALL} {
    display: none;
  }
`;

export const DrawerTrigger = styled.li`
  margin: 0 1rem;
  margin-left: 0rem;
`;

export const DrawerTriggerIcon = styled(Hamburger)`
  transition: all 0.3s ease;

  ${M.MEDIA_SMALL} {
    transform: translate(-100vh);
  }
`;

export const DrawerBackdrop = styled(Backdrop)`
  ${M.MEDIA_SMALL} {
    display: none;
  }
`;