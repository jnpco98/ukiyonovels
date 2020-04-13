import React from 'react';
import * as S from './style';

// Add snippets
function Card() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Image
            img={`//d1pnza0erna1im.cloudfront.net/shows/kakushigoto_portrait-key-art-normal-small_86920.jpeg`}
          >
            <S.Overlay />
          </S.Image>
          <S.Details>
            <S.DetailsTitle>
              <span>--Selector--</span>
            </S.DetailsTitle>
            <S.DetailsTitle>
              <span>MA15+ 2014 24 Episodes</span>
            </S.DetailsTitle>
            <S.DetailsTitle>
              <span>Web Novel</span>
              <span>Chinese</span>
            </S.DetailsTitle>
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
