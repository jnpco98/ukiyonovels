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
  const { className, title, fill = 0, link } = props;

  return (
    <S.Container className={className}>
      {title && (
        <S.TextWrap>
          {link ? (
            <Link href={link}>
              <S.Title>{title}</S.Title>
            </Link>
          ) : (
            <S.Title>{title}</S.Title>
          )}
          <S.RatingIcon />
          <S.Rating>{(fill * 10).toFixed(1)}</S.Rating>
        </S.TextWrap>
      )}
      <S.Fill fill={fill}>
        <S.DetailsInfo>
          Vol 1. Ch2
          <S.DotSeparator />
          500 Views
          <S.DotSeparator />
          200 Likes
        </S.DetailsInfo>
      </S.Fill>
    </S.Container>
  );
}

export default Bar;
