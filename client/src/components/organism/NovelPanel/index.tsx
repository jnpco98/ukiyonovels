import React from 'react';
import { t } from '@utilities/locales';
import * as S from './style';

export interface NovelInfoContent {
  coverImage: string;
  type: string;
  genres: string[];
  tags: string[];
  origins: string[];
  authors: string[];
  artists: string[];
  year: string;
  status: string;
}

type Props = {
  className?: string;
  gutterLeft?: boolean;
  gutterRight?: boolean;
  content: NovelInfoContent;
};

function NovelInfo(props: Props) {
  const { className, content, gutterLeft, gutterRight } = props;
  const { coverImage, type, genres, tags, origins, authors, artists, year, status } = content;
  const {
    typeHeading,
    genreHeading,
    tagsHeading,
    originHeading,
    authorsHeading,
    artistsHeading,
    yearHeading,
    statusHeading
  } = t('components.novelPanel');

  return (
    <S.Container className={className} gutterLeft={gutterLeft} gutterRight={gutterRight}>
      <S.FeaturedImageWrapper>
        <S.FeaturedImage src={coverImage} />
      </S.FeaturedImageWrapper>
      <S.Info heading={typeHeading} items={[type]} />
      <S.Info heading={genreHeading} items={genres} />
      <S.Info heading={tagsHeading} items={tags} />
      <S.Info heading={originHeading} items={origins} />
      <S.Info heading={authorsHeading} items={authors} />
      <S.Info heading={artistsHeading} items={artists} />
      <S.Info heading={yearHeading} items={[year]} />
      <S.Info heading={statusHeading} items={[status]} />
    </S.Container>
  );
}

export default NovelInfo;
