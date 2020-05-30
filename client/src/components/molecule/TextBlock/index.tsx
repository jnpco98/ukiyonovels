import React from 'react';
import Text, { TextType } from '@components/atom/Text';
import * as S from './style';
import { LinkProps } from 'next/link';
import ConditionalWrapper from '@components/atom/ConditionalWrapper';
import Link from 'next/link';

type Props = {
  className?: string;
  heading: string;
  subtitle?: string | number;
  linkLabel?: string;
  link?: LinkProps;
};

function TextBlock(props: Props) {
  const { className, heading, subtitle, linkLabel, link } = props;

  return (
    <S.Container className={className}>
      <Text textType={TextType.SubsectionTitle}>{heading}</Text>
      {subtitle && <Text>{subtitle}</Text>}
      
      {linkLabel &&
        <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
          <S.Link>{linkLabel}</S.Link>
        </ConditionalWrapper>
      }
    </S.Container>
  );
}

export default TextBlock;
