import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/dist/client/router';
import { useMediaQuery } from 'react-responsive';
import { ENABLE_ACCOUNTS } from '@constants/head';
import Backdrop from '@components/atom/Backdrop';
import SearchOverlay from '@components/organism/SearchOverlay';
import { MenuItem, mobilePrimaryMenu, mobileSecondaryMenu, primaryMenu, secondaryMenu } from '@constants/menu';
import * as M from '@utilities/media';
import * as S from './style';

const DynamicIcon = dynamic(() => import('@components/molecule/DynamicIcon'), { ssr: false });

type Props = {
  onSelect?: Function;
};

function Header(props: Props) {
  const { onSelect } = props;

  const [activeMenuItem, setActiveMenuItem] = useState(mobilePrimaryMenu[0].key);
  const [floating, setFloating] = useState(false);
  const [drawerActive, setDrawerActive] = useState(false);
  const [searchOverlayActive, setSearchOverlayActive] = useState(false);

  const router = useRouter();
  const containerRef = useRef(null);

  const isMobileDevice = useMediaQuery({ query: `(max-width: ${M.SMALL})` }, null, () => setDrawerActive(false));

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
      <S.MenuItem
        key={key}
        active={menuItem.key === activeMenuItem}
        icon={!!menuItem.icon}
        onClick={() => {
          if (menuItem.key === 'search') setSearchOverlayActive(true);
          else handleSelect(menuItem.key);
        }}
      >
        {menuItem.link ? (
          <S.Link link={menuItem.link}>
            {menuItem.icon ? <DynamicIcon SVGString={menuItem.icon} /> : menuItem.label}
          </S.Link>
        ) : (
          <S.Button>
            {menuItem.icon ? <DynamicIcon SVGString={menuItem.icon} /> : menuItem.label}
          </S.Button>
        )}
      </S.MenuItem>
    );
  }

  return (
    <S.Container floating={floating} ref={containerRef}>

      {
        isMobileDevice ?
          <>
            <S.LeftMenu>
              <S.DrawerTrigger onClick={(): void => setDrawerActive(!drawerActive)}>
                <S.DrawerTriggerIcon active={drawerActive} />
              </S.DrawerTrigger>
            </S.LeftMenu>
            <S.Drawer drawerActive={drawerActive}>
              {mobileSecondaryMenu.map((item) => renderLinks(item, `${item.key}`))}
            </S.Drawer>
            <Backdrop active={drawerActive} onClick={(): void => setDrawerActive(false)} />

            <S.RightMenu>{mobilePrimaryMenu.map((item) => renderLinks(item, `${item.key}`))}</S.RightMenu>
          </> :
          <>
            <S.LeftMenu>{secondaryMenu.map((item) => renderLinks(item, `${item.key}`))}</S.LeftMenu>
            <S.RightMenu>{primaryMenu.map((item) => renderLinks(item, `${item.key}`))}</S.RightMenu>
          </>
      }

      <SearchOverlay
        active={searchOverlayActive}
        setActive={setSearchOverlayActive}
        onSearchSubmit={(query: string) => router.push(`/search?query=${query}`)}
      />
    </S.Container>
  );
}

export default Header;