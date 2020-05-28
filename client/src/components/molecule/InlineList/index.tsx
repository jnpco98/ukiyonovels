import React, { Fragment } from 'react';
import * as S from './style';

type Props = {
  className?: string;
  items: string[];
};

function InlineList(props: Props) {
  const { className, items } = props;

  return (
    <S.Container className={className}>
      {items.map((item, idx) => (
        <Fragment key={idx}>
          {item}
          {idx !== items.length - 1 && <S.DividerWrapper><S.Divider /></S.DividerWrapper>}
        </Fragment>
      ))}
    </S.Container>
  );
}

export default InlineList;
