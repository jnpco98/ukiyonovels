import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import { ENABLE_ACCOUNTS } from '@constants/head';
import SearchOverlay from '@components/organism/SearchOverlay';
import { MenuItem, mobilePrimaryMenu, mobileSecondaryMenu, primaryMenu, secondaryMenu } from '@constants/menu';
import * as S from './style';
import BannerLogo from '../BannerLogo';


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
    if(!bannerRef.current || typeof bannerRef.current.getBoundingClientRect !== 'function') return;
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
            {menuItem.icon ? <S.Icon SVGString={menuItem.icon} /> : <S.Button>menuItem.label</S.Button>}
          </>
        )}
      </S.MenuItem>
    );
  }

  return (
    <>
      <BannerLogo ref={bannerRef}/>
      <S.Container floating={floating}>

        <S.MobileMenuItem>
          <S.DrawerTrigger onClick={(): void => setDrawerActive(!drawerActive)}>
            <S.DrawerTriggerIcon active={drawerActive} />
          </S.DrawerTrigger>
        </S.MobileMenuItem>
        <S.Drawer drawerActive={drawerActive}>
          {mobileSecondaryMenu.map((item) => renderLinks(item, `${item.key}`))}
        </S.Drawer>
        <S.DrawerBackdrop active={drawerActive} onClick={(): void => setDrawerActive(false)} />
        <S.MobileMenuItem>{mobilePrimaryMenu.map((item) => renderLinks(item, `${item.key}`))}</S.MobileMenuItem>

      
        <S.DesktopMenuItem>{secondaryMenu.map((item) => renderLinks(item, `${item.key}`))}</S.DesktopMenuItem>
        <S.DesktopMenuItem>{primaryMenu.map((item) => renderLinks(item, `${item.key}`))}</S.DesktopMenuItem>

        <SearchOverlay
          active={searchOverlayActive}
          setActive={setSearchOverlayActive}
          onSearchSubmit={(query: string) => router.push(`/search?query=${query}`)}
          placeholder="Search for a novel..."
        />
      </S.Container>
    </>
  );
}

export default Header;