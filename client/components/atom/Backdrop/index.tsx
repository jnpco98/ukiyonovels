import React, { useEffect } from 'react';
import * as S from './style';

type Props = {
  active: boolean;
  className?: string;
  children?: React.ReactNode;
  transparent?: boolean;
  centerContent?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const CLASS_NO_SCROLL = 'no-scroll';

function Backdrop(props: Props) {
  const { active, className, children, onClick, centerContent, transparent } = props;

  useEffect(() => {
    if (active) document.body.classList.add(CLASS_NO_SCROLL);
    else if (!active) document.body.classList.remove(CLASS_NO_SCROLL);
  }, [active]);

  return (
    <S.BackdropContainer
      className={className}
      onClick={onClick}
      active={active}
      transparent={transparent}
      centerContent={centerContent}
    >
      {children}
    </S.BackdropContainer>
  );
}

export default Backdrop;
