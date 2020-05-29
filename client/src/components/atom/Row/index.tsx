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
  linkSecondary?: LinkProps;
}

type Props = {
  className?: string;
  content: RowContent;
};

function Row(props: Props) {
  const { className, content } = props;
  const { prefix, title, subtitle, link, linkSecondary } = content;

  const alternate = !!(prefix && subtitle);

  return (
    <S.Container className={className} alternate={alternate}>
      {alternate ? (
        <>
          <ConditionalWrapper condition={!!(linkSecondary && linkSecondary.href)} wrapper={children => <Link as={linkSecondary.as} href={linkSecondary.href} passHref>{children}</Link>}>
            <S.Prefix>{prefix}</S.Prefix>
          </ConditionalWrapper>
          
          <S.Wrapper>
            <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
              <S.Title>{title}</S.Title>
            </ConditionalWrapper>
            <Text>{subtitle}</Text>
          </S.Wrapper>
        </>
      ) : (
        <>
          <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
            <S.Title>{title}</S.Title>
          </ConditionalWrapper>
          {subtitle && <Text>{subtitle}</Text>}
        </>
      )}
    </S.Container>
  );
}

export default Row;
