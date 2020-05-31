import React from 'react';
import Link, { LinkProps } from 'next/link';
import ConditionalWrapper from '@components/atom/ConditionalWrapper';
import * as S from './style';

export type TabbedListItem = {
  key: string;
  label: string;
  link?: LinkProps;
}

type Props = {
  className?: string;
  heading?: string;
  items: TabbedListItem[];
};

function TabbedList(props: Props) {
  const { className, heading, items } = props;

  return (
    <S.Container className={className}>
      {heading && <S.Heading>{heading}</S.Heading>}
      {items.map(item => (
        <ConditionalWrapper condition={!!(item.link && item.link.href)} wrapper={children => <Link as={item.link.as} href={item.link.href} passHref>{children}</Link>}>
          <S.Item>{item.label}</S.Item>
        </ConditionalWrapper>
      ))}
    </S.Container>
  );
}

export default TabbedList;
