import React from 'react';
import Text from '@components/atom/Text';
import * as S from './style';
import Link from '@components/atom/Link';

export interface RowContent {
  prefix?: string;
  title: string;
  subtitle?: string | number;
  link?: string;
}

type Props = {
  className?: string;
  content: RowContent;
};

function Row(props: Props) {
  const { className, content } = props;
  const { prefix, title, subtitle, link } = content;

  const alternate = !!(prefix && subtitle);

  const Element = <S.Container className={className} alternate={alternate}>
      {
        alternate ?
        <>
          <S.Prefix link={link}>{prefix}</S.Prefix>
          <S.Wrapper>
            <S.Title link={link}>{title}</S.Title>
            <Text>{subtitle}</Text>
          </S.Wrapper>
        </>
        :
        <>
          <S.Title link={link}>{title}</S.Title>
          {subtitle && <Text>{subtitle}</Text>}
        </>
      }
    </S.Container>;

  return link ? <Link href={link} passHref>{Element}</Link> : Element;
}

export default Row;