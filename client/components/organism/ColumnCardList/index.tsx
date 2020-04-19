import React from 'react';
import ColumnCard from '@components/molecule/ColumnCard';
import * as S from './style';

function ColumnCardList() {
  return (
    <S.Container>
      {Array(20)
        .fill(0)
        .map((e) => (
          <ColumnCard />
        ))}
    </S.Container>
  );
}

export default ColumnCardList;
