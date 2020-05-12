import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import * as S from './style';

type Props = {
  className?: string;
  label?: string;
  name: string;
};

function Switch(props: Props, ref: React.RefObject<HTMLInputElement>) {
  const { className, label, name } = props;
  
  return (
    <S.Container className={className}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Checkbox ref={ref} name={name}/>
    </S.Container>
  );
}

export default forwardRef(Switch as ForwardRefRenderFunction<HTMLInputElement, Props>);
