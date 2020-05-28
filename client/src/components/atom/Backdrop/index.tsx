import React, { ReactNode, HTMLAttributes } from 'react';
import * as S from './style';

type Props = {
  active: boolean;
  className?: string;
  children?: ReactNode;
  transparent?: boolean;
  centerContent?: boolean;
} & HTMLAttributes<HTMLDivElement>;

function Backdrop(props: Props) {
  const { children, ...restProps } = props;

  return (
    <S.Container {...restProps}>
      {children}
    </S.Container>
  );
}

export default Backdrop;
