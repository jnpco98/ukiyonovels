import React, { Fragment } from 'react';
import Link, { LinkProps } from 'next/link';
import ConditionalWrapper from '@components/atom/ConditionalWrapper';
import * as S from './style';

export type InlineListItem = {
  key: string;
  label: string;
  link?: LinkProps;
}

type Props = {
  className?: string;
  items: InlineListItem[];
};

function InlineList(props: Props) {
  const { className, items } = props;

  return (
    <S.Container className={className}>
      {items.map((item, idx) => (
        <Fragment key={item.key}>
          <ConditionalWrapper condition={!!(item.link && item.link.href)} wrapper={children => <Link as={item.link.as} href={item.link.href} passHref>{children}</Link>}>
            <a>{item.label}</a>
          </ConditionalWrapper>
          {idx !== items.length - 1 && <S.DividerWrapper><S.Divider /></S.DividerWrapper>}
        </Fragment>
      ))}
    </S.Container>
  );
}

export default InlineList;
