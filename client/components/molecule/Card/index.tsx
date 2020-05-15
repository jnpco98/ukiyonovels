import React from 'react';
import { t } from '@utilities/locales';
import * as S from './style';

export interface CardContent {
  thumbnail?: string;
  heading: string;
  inline: string[];
  tabbed: string[];
}

type Props = {
  className?: string;
  content: CardContent;
};

function Card(props: Props) {
  const { className, content } = props;
  const { thumbnail, heading, inline, tabbed } = content;

  return (
    <S.Container className={className}>
      <div>
        <S.Content>
          <S.Image img={thumbnail}><S.Overlay /></S.Image>
          <S.Details>
            <S.Title>{heading}</S.Title>
            <S.DotSeparatedList items={inline}/>
            <S.TabbedList items={tabbed}/>
          </S.Details>
          <S.Reveal>
            <S.RevealContent>
              <S.RevealIcon/>{t('card.cta')}
            </S.RevealContent>
          </S.Reveal>
        </S.Content>
      </div>
    </S.Container>
  );
}

export default Card;
