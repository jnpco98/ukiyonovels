import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
  className?: string;
  drawerActive?: boolean;
  children?: React.ReactNode;
};

const SideDrawer: React.FC<Props> = (props: Props): ReactElement => {
  const { className, drawerActive, children } = props;

  return (
    <S.SideDrawerContainer className={className} sidenavActive={drawerActive}>
      {children}
    </S.SideDrawerContainer>
  );
};

export default SideDrawer;
