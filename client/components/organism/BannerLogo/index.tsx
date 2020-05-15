import React, { forwardRef, RefObject, ForwardRefRenderFunction } from 'react';
import * as S from './style';
import Link from '@components/atom/Link';

type Props = {
  className?: string;
}

function BannerLogo(props: Props, ref: RefObject<HTMLAnchorElement>) {
  const { className } = props;
  return(
    <Link href='/' passHref>
      <S.Container className={className} ref={ref}>
        <S.Logo/>
      </S.Container>
    </Link>
  );
}

export default forwardRef(BannerLogo as ForwardRefRenderFunction<HTMLAnchorElement, Props>);