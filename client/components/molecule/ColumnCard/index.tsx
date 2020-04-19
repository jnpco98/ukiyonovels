import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
};

function ColumnCard(props: Props) {
  const { className } = props;

  return (
    <S.Container className={className}>
      <S.Wrapper>
        <S.Content>
          <S.Image
            img={`//d1pnza0erna1im.cloudfront.net/shows/kakushigoto_portrait-key-art-normal-small_86920.jpeg`}
          >
            <S.Overlay />
            <S.PlayIcon />
          </S.Image>
          <S.Details>
            <S.DetailsTitle>
              <span>Kaguya-Sama: Love is War</span>
            </S.DetailsTitle>
            <S.DetailsInfo>
              Vol 1. Ch
              <S.DotSeparator />
              500 Views
              <S.DotSeparator />
              200 Likes
            </S.DetailsInfo>
            <S.DetailsTabs>
              <span>Web Novel</span>
              <span>Chinese</span>
            </S.DetailsTabs>
            <S.Meta>
              <S.ReleaseDate>Apr 21</S.ReleaseDate>
              <S.Rating>0.4</S.Rating>
            </S.Meta>
          </S.Details>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}

export default ColumnCard;
