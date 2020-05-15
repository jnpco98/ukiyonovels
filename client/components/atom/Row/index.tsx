import React from 'react';
import Text from '@components/atom/Text';
import * as S from './style';
import Link from '../Link';

export interface RowContent {
  title: string;
  subtitle?: number;
  link?: string;
}

type Props = {
  className?: string;
  bulleted?: boolean;
  content: RowContent;
};

function Row(props: Props) {
  const { className, content, bulleted } = props;
  const { title, subtitle, link } = content;

  const Element = 
    <S.Container className={className}>
      <S.Title bulleted={bulleted} link={link}>{title}</S.Title>
      <Text>{subtitle}</Text>
    </S.Container>

  return link ? <Link href={link} passHref>{Element}</Link> : Element;
}

export default Row;