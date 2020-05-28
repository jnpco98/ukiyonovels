import React from 'react';
import Link, { LinkProps } from 'next/link';
import { CardContent } from '@components/molecule/Card';
import * as S from './style';
import ConditionalWrapper from '@components/atom/ConditionalWrapper';

type Props = {
  className?: string;
  content: CardContent;
  link?: LinkProps;
};

function WideCard(props: Props) {
  const { className, content } = props;
  const { thumbnail, heading, inline, tabbed, link } = content;

  return (
    <S.Container className={className}>
      <S.Content>
        <S.Image img={thumbnail}>
          <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
            <S.Overlay />
          </ConditionalWrapper>
        </S.Image>
        <S.Details>
          <S.Meta>
            <S.Title>{heading}</S.Title>
            <S.DotSeparatedList items={inline} />
            <S.TabbedList items={tabbed} />
          </S.Meta>
          <S.Reveal>
            <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
              <S.RevealContent anchor={true}>
                <S.RevealIcon />
              </S.RevealContent>
            </ConditionalWrapper>
          </S.Reveal>
        </S.Details>
      </S.Content>
    </S.Container>
  );
}

export default WideCard;
