import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
  drawerActive?: boolean;
  children?: React.ReactNode;
};

function SideDrawer(props: Props) {
  const { className, drawerActive, children } = props;

  return (
    <S.Container className={className} sidenavActive={drawerActive}>
      {children}
    </S.Container>
  );
}

export default SideDrawer;
