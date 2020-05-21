import React, { forwardRef, ForwardRefRenderFunction, RefObject, HTMLAttributes } from 'react';
import * as S from './style';

type Props = {
  className?: string;
  label?: string;
  name: string;
} & HTMLAttributes<HTMLInputElement>;

function Switch(props: Props, ref: RefObject<HTMLInputElement>) {
  const { className, label, name, ...restProps } = props;

  return (
    <S.Container className={className}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Checkbox ref={ref} name={name} {...restProps} />
    </S.Container>
  );
}

export default forwardRef(Switch as ForwardRefRenderFunction<HTMLInputElement, Props>);
