import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';
import Backdrop from '@components/atom/Backdrop';
import SearchOverlay from '@components/organism/SearchOverlay';
import Hamburger from '@components/atom/Hamburger';
import { ENABLE_ACCOUNTS } from '@constants/environment';
import { MenuItem, mainMenu, sideMenu } from '@constants/menu';
import * as S from './style';

const DynamicIcon = dynamic(() => import('@components/molecule/DynamicIcon'), { ssr: false });

type Props = {
  onSelect?: Function;
};

function Header(props: Props) {
  const { onSelect } = props;

  const [activeMenuItem, setActiveMenuItem] = useState(sideMenu[0].key);
  const [floating, setFloating] = useState(false);
  const [drawerActive, setDrawerActive] = useState(false);
  const [searchOverlayActive, setSearchOverlayActive] = useState(false);

  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => onSelect && onSelect(activeMenuItem), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    setFloating(window.pageYOffset >= containerRef.current.scrollHeight);
  }

  function handleSelect(key: string) {
    setActiveMenuItem(key);
    if (onSelect) onSelect(key);
    if (drawerActive) setDrawerActive(false);
  }

  function renderLinks(menuItem: MenuItem, key: string) {
    if (menuItem.key === 'account' && !ENABLE_ACCOUNTS) return <></>;
    return (
      <S.HeaderMenuItem
        key={key}
        active={menuItem.key === activeMenuItem}
        icon={!!menuItem.icon}
        onClick={() => {
          if (menuItem.key === 'search') setSearchOverlayActive(true);
          else handleSelect(menuItem.key);
        }}
      >
        {menuItem.link ? (
          <S.HeaderMenuItemLink link={menuItem.link}>
            {menuItem.icon ? <DynamicIcon SVGString={menuItem.label} /> : menuItem.label}
          </S.HeaderMenuItemLink>
        ) : (
          <S.HeaderMenuItemButton>
            {menuItem.icon ? <DynamicIcon SVGString={menuItem.label} /> : menuItem.label}
          </S.HeaderMenuItemButton>
        )}
      </S.HeaderMenuItem>
    );
  }

  return (
    <S.Container floating={floating} ref={containerRef}>
      <S.LeftMenu>
        <S.DrawerTrigger onClick={(): void => setDrawerActive(!drawerActive)}>
          <Hamburger active={drawerActive} />
        </S.DrawerTrigger>
      </S.LeftMenu>

      <S.RightMenu>{mainMenu.map((item) => renderLinks(item, `main_${item.key}`))}</S.RightMenu>
      <S.Drawer drawerActive={drawerActive}>
        {sideMenu.map((item) => renderLinks(item, `side_${item.key}`))}
      </S.Drawer>
      <Backdrop active={drawerActive} onClick={(): void => setDrawerActive(false)} />

      <SearchOverlay
        active={searchOverlayActive}
        setActive={setSearchOverlayActive}
        onSearchSubmit={(query: string) => router.push(`/search?query=${query}`)}
      />
    </S.Container>
  );
}

export default Header;
