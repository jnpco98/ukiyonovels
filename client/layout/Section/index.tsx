import React, { ReactNode } from 'react';
import * as S from './style'

type Props = {
  children: ReactNode;
  className?: string;
  layoutType?: S.Layout;
  navOffset?: boolean;
  footerOffset?: boolean;
} & React.HTMLAttributes<HTMLDivElement>

function Layout(props: Props) {
  const { children, className, layoutType, navOffset, footerOffset, ...restProps } = props;
  return(
    <S.Container className={className} layoutType={layoutType} navOffset={navOffset} footerOffset={footerOffset} {...restProps}>{children}</S.Container>
  );
}

export default Layout;