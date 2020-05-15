import React from 'react';
import * as S from './style';

export interface HozCardContent {
  heading: string;
  inline: string[];
  tabbed: string[];
}

type Props = {
  className?: string;
  thumbnail?: string;
  content: HozCardContent;
};

function HozCard(props: Props) {
  const { className, thumbnail, content } = props;

  return (
    <S.Container className={className}>
      <div>
        <S.Content>
          <S.Image img={thumbnail}><S.Overlay /></S.Image>
          <S.Details>
            <S.Meta>
              <S.Title>{content.heading}</S.Title>
              <S.InlineList items={content.inline}/>
              <S.TabbedList items={content.tabbed}/>
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

export default HozCard;
