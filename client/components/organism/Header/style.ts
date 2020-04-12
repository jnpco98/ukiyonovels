import styled, { css } from 'styled-components';
import SideDrawer from '@components/atom/Drawer';
import Text, { TextType } from '@components/atom/Text';
import { center, FLEX_ALIGN_MAIN } from '@utilities/mixins';
import * as M from '@utilities/media';

type HeaderMenuProps = {
  floating: boolean;
};

type HeaderMenuItemProps = {
  active: boolean;
  icon?: boolean;
};

export const LeftMenu = styled.ul`
  ${M.MEDIA_XXSMALL} {
    margin-left: 1rem;
  }

  ${M.MEDIA_XSMALL} {
    margin-left: 2rem;
  }
`;

export const RightMenu = styled.ul`
  margin-right: 1rem;

  ${M.MEDIA_XSMALL} {
    margin-right: 2rem;
  }
`;

export const HeaderSideDrawerMenu = styled.ul``;

export const HeaderMenuItemLink = styled(Text).attrs({ textType: TextType.Anchor })<{ link: string; }>`
  overflow: hidden;

  &:after {
    transition: all 0.3s ease;
  }
`;

export const HeaderMenuItemButton = styled(Text).attrs({ textType: TextType.Span })`
  overflow: hidden;

  &:after {
    transition: all 0.3s ease;
  }
`;

export const HeaderMenuItem = styled.li<HeaderMenuItemProps>`
  ${center(FLEX_ALIGN_MAIN)};

  text-transform: uppercase;
  margin: 0 0.9rem;
  padding-top: 0.8rem;

  ${props => 
    props.icon && css`
      padding-top: 0;
      margin-right: 0;

      ${HeaderMenuItemLink}, ${HeaderMenuItemButton} {
        width: 1rem;
        height: 1rem;
      }
      
      ${HeaderMenuItemLink} {
        font-size: unset;

        &:after {
          content: none;
        }
      }
    `};

  ${HeaderMenuItemLink} {
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      background: black;
      bottom: 0;
      left: 0;
      transform: translateX(-110%);
    }
  }

  &:hover {
    ${HeaderMenuItemLink}:after {
      transform: translateX(0);
    }
  }

  ${props =>
    props.active &&
    css`
      ${HeaderMenuItemLink}:after {
        transform: translateX(0);
      }
    `};
    
  ${M.MEDIA_XXSMALL} {
    margin: 0 0.5rem;
  }

  ${M.MEDIA_XSMALL} {
    margin: 0 1rem;
    padding-top: 1.3rem;

    ${props =>
      props.icon && 
      css`
        ${HeaderMenuItemLink}, ${HeaderMenuItemButton} {
          width: 1.2rem;
          height: 1.2rem;
        }
      `}
  }
`;

export const DrawerTrigger = styled.li``;

export const Container = styled.header<HeaderMenuProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  position: fixed;
  transition: all 0.2s ease;
  z-index: 50;
  background: transparent;

  ${LeftMenu}, ${RightMenu} {
    display: flex;
  }

  ${props =>
    props.floating &&
    css`
      font-size: 0.9rem;
      position: fixed;
      background: ${({ theme }) => theme.colors.background};
      box-shadow: 0px 10px 13px -9px rgba(0, 0, 0, 0.75);
    `};

  ${M.MEDIA_XLARGE} {
    height: 6rem;
  }

  ${M.MEDIA_XXLARGE} {
    height: 8rem;
  }
`;

export const Drawer = styled(SideDrawer)`
  ${HeaderMenuItem}:first-child {
    margin-top: 4rem;
  }

  ${M.MEDIA_XXSMALL} {
    width: 23rem;

    ${HeaderMenuItem}:first-child {
      margin-top: 4.5rem;
    }
  }

  ${M.MEDIA_XSMALL} {
    width: 28rem;

    ${HeaderMenuItem}:first-child {
      margin-top: 7.5rem;
    }
  }

  ${M.MEDIA_LARGE} {
    width: 50%;
    ${HeaderMenuItem}:first-child {
      margin-top: 10rem;
    }
  }
`;
