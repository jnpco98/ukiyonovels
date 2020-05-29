import React from 'react';
import Text from '@components/atom/Text';
import * as S from './style';
import Link from '@components/atom/Link';
import { LinkProps } from 'next/link';
import ConditionalWrapper from '../ConditionalWrapper';

export interface RowContent {
  prefix?: string;
  title: string;
  subtitle?: string | number;
  link?: LinkProps;
}

type Props = {
  className?: string;
  content: RowContent;
};

function Row(props: Props) {
  const { className, content } = props;
  const { prefix, title, subtitle, link } = content;

  const alternate = !!(prefix && subtitle);

  return (
    <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
      <S.Container className={className} alternate={alternate}>
        {alternate ? (
          <>
            <S.Prefix>{prefix}</S.Prefix>
            <S.Wrapper>
              <S.Title>{title}</S.Title>
              <Text>{subtitle}</Text>
            </S.Wrapper>
          </>
        ) : (
          <>
            <S.Title>{title}</S.Title>
            {subtitle && <Text>{subtitle}</Text>}
          </>
        )}
      </S.Container>
    </ConditionalWrapper>
  );
}

export default Row;
