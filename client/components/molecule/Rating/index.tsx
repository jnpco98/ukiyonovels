import React from 'react';
import Bar from '@components/atom/Bar';
import * as S from './style';

function Rating() {
  return (
    <S.Container>
      {Array(10)
        .fill(0)
        .map((a) => (
          <S.FillBar fill={Math.random()} title="Kaguya-sama: Love is War" link={'/'} />
        ))}
    </S.Container>
  );
}

export default Rating;
