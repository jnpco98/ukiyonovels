import React, { Fragment } from 'react';
import * as S from './style';

type Props = {
  className?: string;
  items: string[];
}

function List(props: Props) {
  const { className, items } = props;

  return(
    <S.Container className={className}>
      {items.map((item, idx) => <Fragment key={idx}>{item}{idx !== items.length - 1 && <S.Divider/>}</Fragment>)}
    </S.Container>
  )
}

export default List;