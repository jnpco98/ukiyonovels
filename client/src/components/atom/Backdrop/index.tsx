import React, { ReactNode, HTMLAttributes } from 'react';
import * as S from './style';

type Props = {
  active: boolean;
  className?: string;
  children?: ReactNode;
  transparent?: boolean;
  centerContent?: boolean;
} & HTMLAttributes<HTMLDivElement>;

function Backdrop (props: Props){
  const { active, className, children, transparent, centerContent, ...restProps } = props;

  return (
    <S.Container className={className} active={active} transparent={transparent} centerContent={centerContent} {...restProps}>
      {children}
    </S.Container>
  );
};

export default Backdrop;