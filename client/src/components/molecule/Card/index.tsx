import React from 'react';
import { t } from '@utilities/locales';
import * as S from './style';
import Link, { LinkProps } from 'next/link';
import ConditionalWrapper from '@components/atom/ConditionalWrapper';
import * as M from '@utilities/media';
import { InlineListItem } from '../InlineList';
import { TabbedListItem } from '../TabbedList';

export const cardResponsive = {
  itemsPerRow: 2,
  gap: 0.2,
  breakpoints: {
    [M.MEDIA_XXSMALL]: {
      itemsPerRow: 3,
      gap: 0.4
    },
    [M.MEDIA_SMALL]: {
      itemsPerRow: 4,
      gap: 0.7
    }
  }
}

export interface CardContent {
  key: string;
  thumbnail?: string;
  heading: string;
  inline: InlineListItem[];
  tabbed: TabbedListItem[];
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
