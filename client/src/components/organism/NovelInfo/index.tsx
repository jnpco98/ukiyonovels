import React from 'react';
import { t } from '@utilities/locales';
import * as S from './style';
import { createNovelFilterLink, NovelFilter } from 'src/pages/novels/[typeSlug]/[filterSlug]';

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
  content?: NovelInfoContent;
};

function NovelInfo(props: Props) {
  const { className, content, gutterLeft, gutterRight } = props;
  const { coverImage, type, genres, tags, origins, authors, artists, year, status } = content || {};
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

  function createInfoItems(type: NovelFilter, items: string[] = []) {
    return items.map(i => ({
      key: i,
      label: i,
      link: createNovelFilterLink(type, i)
    }));
  }

  return (
    <S.Container className={className} gutterLeft={gutterLeft} gutterRight={gutterRight}>
      <S.FeaturedImageWrapper>
        <S.FeaturedImage src={coverImage} />
      </S.FeaturedImageWrapper>
      {type && <S.Info heading={typeHeading} items={createInfoItems('type', [type])} />}
      {genres && genres.length && <S.Info heading={genreHeading} items={createInfoItems('genre', genres)} />}
      {tags && tags.length ? <S.Info heading={tagsHeading} items={createInfoItems('tagged', tags)} /> : <></>}
      {origins && origins.length ? <S.Info heading={originHeading} items={createInfoItems('origin', origins)} /> : <></>}
      {authors && authors.length ? <S.Info heading={authorsHeading} items={createInfoItems('author', authors)} /> : <></>}
      {artists && artists.length ? <S.Info heading={artistsHeading} items={createInfoItems('artist', artists)} /> : <></>}
      {year && <S.Info heading={yearHeading} items={createInfoItems('year', [year])} />}
      {status && <S.Info heading={statusHeading} items={createInfoItems('status', [status])} />}
    </S.Container>
  );
}

export default NovelInfo;
