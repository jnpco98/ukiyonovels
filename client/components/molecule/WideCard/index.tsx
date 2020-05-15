import React from 'react';
import { CardContent } from '@components/molecule/Card';
import * as S from './style';

type Props = {
  className?: string;
  content: CardContent;
};

function WideCard(props: Props) {
  const { className, content } = props;
  const { thumbnail, heading, inline, tabbed } = content;

  return (
    <S.Container className={className}>
      <div>
        <S.Content>
          <S.Image img={thumbnail}><S.Overlay /></S.Image>
          <S.Details>
            <S.Meta>
              <S.Title>{heading}</S.Title>
              <S.InlineList items={inline}/>
              <S.TabbedList items={tabbed}/>
            </S.Meta>
            <S.Reveal>
              <S.RevealContent>
                <S.RevealIcon/>
              </S.RevealContent>
            </S.Reveal>
          </S.Details>
        </S.Content>
      </div>
    </S.Container>
  );
}

export default WideCard;
