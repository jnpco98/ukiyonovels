import React from 'react';
import { t } from '@utilities/locales';
import * as S from './style';
import Link, { LinkProps } from 'next/link';
import ConditionalWrapper from '@components/atom/ConditionalWrapper';

export interface CardContent {
  thumbnail?: string;
  heading: string;
  inline: string[];
  tabbed: string[];
  link?: LinkProps;
}

type Props = {
  className?: string;
  content: CardContent;
};

function Card(props: Props) {
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
          <S.Title>{heading}</S.Title>
          <S.DotSeparatedList items={inline} />
          <S.TabbedList items={tabbed} />
        </S.Details>
        <S.Reveal>
          <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>
            <S.RevealContent anchor={true}>
              <S.RevealIcon />
              {t('components.card.cta')}
            </S.RevealContent>
          </ConditionalWrapper>
        </S.Reveal>
      </S.Content>
    </S.Container>
  );
}

export default Card;
