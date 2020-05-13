import React, { ReactNode, HTMLAttributes } from 'react';
import * as S from './style'

export type Layout = 'primarySecondary' | 'secondaryPrimary' | 'equal';

type Props = {
  children: ReactNode;
  className?: string;
  layoutType?: Layout;
  navOffset?: boolean;
  footerOffset?: boolean;
} & HTMLAttributes<HTMLDivElement>

function Layout(props: Props) {
  const { children, className, layoutType, navOffset, footerOffset, ...restProps } = props;
  return(
    <S.Container className={className} layoutType={layoutType} navOffset={navOffset} footerOffset={footerOffset} {...restProps}>{children}</S.Container>
  );
}

export default Layout;