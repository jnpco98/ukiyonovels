import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import { ENABLE_ACCOUNTS } from '@constants/head';
import SearchOverlay from '@components/organism/SearchOverlay';
import {
  MenuItem,
  mobilePrimaryMenu,
  mobileSecondaryMenu,
  primaryMenu,
  secondaryMenu
} from '@constants/menu';
import BannerLogo from '@components/organism/BannerLogo';
import * as S from './style';

function Header() {
  const [floating, setFloating] = useState(false);
  const [drawerActive, setDrawerActive] = useState(false);
  const [searchOverlayActive, setSearchOverlayActive] = useState(false);

  const router = useRouter();
  const bannerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (!bannerRef.current || typeof bannerRef.current.getBoundingClientRect !== 'function') return;
    setFloating(window.pageYOffset >= bannerRef.current.getBoundingClientRect().height);
  }

  function renderLinks(menuItem: MenuItem, key: string) {
    if (menuItem.key === 'account' && !ENABLE_ACCOUNTS) return <></>;

    return (
      <S.MenuItem
        key={key}
        icon={!!menuItem.icon}
        onClick={() => menuItem.key.includes('_search') && setSearchOverlayActive(true)}
      >
        {menuItem.link ? (
          <S.Link decorateActive link={menuItem.link}>
            {menuItem.icon ? <S.Icon SVGString={menuItem.icon} /> : menuItem.label}
          </S.Link>
        ) : (
          <>
            {menuItem.icon ? (
              <S.Icon SVGString={menuItem.icon} />
            ) : (
              <S.Button>menuItem.label</S.Button>
            )}
          </>
        )}
      </S.MenuItem>
    );
  }

  return (
    <>
      <BannerLogo ref={bannerRef} />
      <S.Container floating={floating} flat={drawerActive || searchOverlayActive}>
        <S.MobileMenuItems>
          <S.DrawerTrigger onClick={(): void => setDrawerActive(!drawerActive)}>
            <S.DrawerTriggerIcon active={drawerActive} />
          </S.DrawerTrigger>
        </S.MobileMenuItems>
        <S.Drawer drawerActive={drawerActive}>
          {mobileSecondaryMenu.map((item) => renderLinks(item, `${item.key}`))}
        </S.Drawer>
        <S.DrawerBackdrop active={drawerActive} onClick={(): void => setDrawerActive(false)} />
        <S.MobileMenuItems>
          {mobilePrimaryMenu.map((item) => renderLinks(item, `${item.key}`))}
        </S.MobileMenuItems>

        <S.DesktopMenuItems>
          {secondaryMenu.map((item) => renderLinks(item, `${item.key}`))}
        </S.DesktopMenuItems>
        <S.DesktopMenuItems>
          {primaryMenu.map((item) => renderLinks(item, `${item.key}`))}
        </S.DesktopMenuItems>

        <SearchOverlay
          active={searchOverlayActive}
          setActive={setSearchOverlayActive}
          onSearchSubmit={(query: string) => router.push(`/search?keyword=${query}`)}
        />
      </S.Container>
      <S.Filler active={floating} />
    </>
  );
}

export default Header;
