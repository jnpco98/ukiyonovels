import React from 'react';
import * as S from './style';

type Props = {
  active: boolean;
  className?: string;
  children?: React.ReactNode;
  transparent?: boolean;
  centerContent?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Backdrop: React.FC<Props> = (props: Props) => {
  const { active, className, children, transparent, centerContent, ...restProps } = props;

  if (active) document.body.classList.add('no-scroll');
  else if (!active) document.body.classList.remove('no-scroll');

  return (
    <S.BackdropContainer className={className} active={active} transparent={transparent} centerContent={centerContent} {...restProps}>
      {children}
    </S.BackdropContainer>
  );
};

export default Backdrop;