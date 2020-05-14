import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
  items: string[];
}

function Tabs(props: Props) {
  const { className, items } = props;

  return(
    <S.Container className={className}>
      {items.map((item, idx) => <S.Item key={idx}>{item}</S.Item>)}
    </S.Container>
  )
}

export default Tabs;