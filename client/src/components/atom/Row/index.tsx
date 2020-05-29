import React from 'react';
import Text from '@components/atom/Text';
import * as S from './style';
import Link from '@components/atom/Link';
import { LinkProps } from 'next/link';
import ConditionalWrapper from '../ConditionalWrapper';

export interface RowContent {
  title: string;
  secondary?: string;
  subtitle?: string | number;
  link?: LinkProps;
  linkSecondary?: LinkProps;
}

export type RowType = 'standard' | 'preview' | 'alternate';

type Props = {
  className?: string;
  content: RowContent;
  rowType?: RowType;
};

function Row(props: Props) {
  const { className, content, rowType = 'standard' } = props;
  const { secondary, title, subtitle, link, linkSecondary } = content;

  return (
    <S.Container className={className} rowType={rowType}>
      {rowType === 'alternate' ? (
        <>
          {secondary && <ConditionalWrapper condition={!!(linkSecondary && linkSecondary.href)} wrapper={children => <Link as={linkSecondary.as} href={linkSecondary.href} passHref>{children}</Link>}>
            <S.Secondary>{secondary}</S.Secondary>
          </ConditionalWrapper>}
          
          {title && <S.Wrapper>
            <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
              <S.Title>{title}</S.Title>
            </ConditionalWrapper>
            {subtitle && <Text>{subtitle}</Text>}
          </S.Wrapper>}
        </>
      ) : rowType === 'preview' ? (
        <>
          {title && <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
            <S.Title>{title}</S.Title>
          </ConditionalWrapper>}
          {secondary && <ConditionalWrapper condition={!!(linkSecondary && linkSecondary.href)} wrapper={children => <Link as={linkSecondary.as} href={linkSecondary.href} passHref>{children}</Link>}>
            <S.Secondary>{secondary}</S.Secondary>
          </ConditionalWrapper>}
          {subtitle && <Text>{subtitle}</Text>}
        </>
      ) : (
        <>
          {title && <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
            <S.Title>{title}</S.Title>
          </ConditionalWrapper>}
          {subtitle && <Text>{subtitle}</Text>}
        </>
      )}
    </S.Container>
  );
}

export default Row;
