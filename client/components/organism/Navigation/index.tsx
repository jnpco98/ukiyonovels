import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useMediaQuery } from 'react-responsive';
import { ENABLE_ACCOUNTS } from '@constants/head';
import SearchOverlay from '@components/organism/SearchOverlay';
import { MenuItem, mobilePrimaryMenu, mobileSecondaryMenu, primaryMenu, secondaryMenu } from '@constants/menu';
import * as M from '@utilities/media';
import * as S from './style';


function Navigation() {
  const [floating, setFloating] = useState(false);
  const [drawerActive, setDrawerActive] = useState(false);
  const [searchOverlayActive, setSearchOverlayActive] = useState(false);

  const router = useRouter();
  const containerRef = useRef(null);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    setFloating(window.pageYOffset >= containerRef.current.scrollHeight);
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
    <S.Container floating={floating} ref={containerRef}>

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
  );
}

export default Navigation;