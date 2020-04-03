import React from 'react';
import * as S from './style';

type Props = {
  active: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Backdrop: React.FC<Props> = (props: Props) => {
  const { active, className, children, onClick } = props;

  // Replace with redux to fix bugs with conflicting multiple
  if (active) document.body.classList.add('no-scroll');
  else if (!active) document.body.classList.remove('no-scroll');

  return (
    <S.BackdropContainer className={className} onClick={onClick} active={active}>
      {children}
    </S.BackdropContainer>
  );
};

export default Backdrop;
