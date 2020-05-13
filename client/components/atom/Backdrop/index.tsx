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

  if(process.browser) {
    if (active) document.body.classList.add('no-scroll');
    else if (!active) document.body.classList.remove('no-scroll');
  }

  return (
    <S.BackdropContainer className={className} active={active} transparent={transparent} centerContent={centerContent} {...restProps}>
      {children}
    </S.BackdropContainer>
  );
};

export default Backdrop;