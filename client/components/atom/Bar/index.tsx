import React from 'react';
import Link from 'next/link';
import * as S from './style';

type Props = {
  className?: string;
  title?: string;
  fill?: number;
  link?: string;
};

function Bar(props: Props) {
  const { className, title, fill, link } = props;

  return (
    <S.Container className={className}>
      {title && (
        <S.TextWrap>
          <Link href={link}>
            <S.Title>{title}</S.Title>
          </Link>
          <S.Rating>{(fill * 10).toFixed(1)}</S.Rating>
        </S.TextWrap>
      )}
      <S.Fill fill={fill} />
    </S.Container>
  );
}

export default Bar;
