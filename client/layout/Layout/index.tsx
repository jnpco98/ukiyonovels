import React, { ReactNode, HTMLAttributes } from 'react';
import * as S from './style'

export type Layout = 'primarySecondary' | 'secondaryPrimary' | 'equal';

type Props = {
  children: ReactNode;
  className?: string;
  layoutType?: Layout;
  navOffset?: boolean;
  footerOffset?: boolean;
  main?: boolean;
  gutterLeft?: boolean;
  gutterRight?: boolean;
} & HTMLAttributes<HTMLDivElement>

function Layout(props: Props) {
  const { children, className, layoutType, navOffset, footerOffset, main, gutterLeft, gutterRight, ...restProps } = props;
  return(
    <S.Container className={className} layoutType={layoutType} navOffset={navOffset} footerOffset={footerOffset} main={main} gutterLeft={gutterLeft} gutterRight={gutterRight} {...restProps}>{children}</S.Container>
  );
}

export default Layout;