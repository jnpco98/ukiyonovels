import React from 'react';
import * as S from './style';
import { t } from '@utilities/locales';

export interface CardContent {
  heading: string;
  inline: string[];
  tabbed: string[];
}

type Props = {
  className?: string;
  thumbnail?: string;
  content: CardContent;
};

function Card(props: Props) {
  const { className, thumbnail, content } = props;

  return (
    <S.Container className={className}>
      <S.Wrapper>
        <S.Content>
          <S.Image img={thumbnail}><S.Overlay /></S.Image>
          <S.Details>
            <S.Title>{content.heading}</S.Title>
            <S.InlineList items={content.inline}/>
            <S.TabbedList items={content.tabbed}/>
          </S.Details>
          <S.Reveal>
            <S.RevealContent><S.RevealIcon/>{t('card.cta')}</S.RevealContent>
          </S.Reveal>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}

export default Card;
