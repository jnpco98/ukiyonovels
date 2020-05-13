import React, { forwardRef, RefObject, ForwardRefRenderFunction } from 'react';
import * as S from './style';

type Props = {
  className?: string;
}

function BannerLogo(props: Props, ref: RefObject<HTMLDivElement>) {
  const { className } = props;
  return(
    <S.Container className={className} ref={ref}>
      <S.Logo/>
    </S.Container>
  );
}

export default forwardRef(BannerLogo as ForwardRefRenderFunction<HTMLDivElement, Props>);