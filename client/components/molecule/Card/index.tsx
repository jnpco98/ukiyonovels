import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
};

function Card(props: Props) {
  const { className } = props;

  return (
    <S.Container className={className}>
      <S.Wrapper>
        <S.Content>
          <S.Image
            img={`//d1pnza0erna1im.cloudfront.net/shows/kakushigoto_portrait-key-art-normal-small_86920.jpeg`}
          >
            <S.Overlay />
          </S.Image>
          <S.Details>
            <S.DetailsTitle>
              <span>Kaguya-Sama: Love is War</span>
            </S.DetailsTitle>
            <S.DetailsInfo>
              MA15+
              <S.DotSeparator />
              2014
              <S.DotSeparator />
              24 Episodes
            </S.DetailsInfo>
            <S.DetailsTabs>
              <span>Web Novel</span>
              <span>Chinese</span>
            </S.DetailsTabs>
          </S.Details>
          <S.Reveal>
            <S.RevealContent>
              <S.CtaIcon />
              Start Reading
            </S.RevealContent>
          </S.Reveal>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}

export default Card;
