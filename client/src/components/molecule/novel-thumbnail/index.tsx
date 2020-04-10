import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { novelThumbnail_novel$key } from '../../../__generated__/novelThumbnail_novel.graphql';

import * as S from './style';

import { truncate } from '../../../utilities/string';
import { SMALL, MEDIUM } from '../../../settings/media';

const fragmentSpec = graphql`
  fragment novelThumbnail_novel on Novel {
    slug
    title
    genres
    coverImage
    type
  }
`;

type Props = {
  className?: string;
  novel: novelThumbnail_novel$key;
};

function NovelThumbnail(props: Props) {
  const { novel } = props;
  const { slug, title, genres, coverImage, type } = useFragment(fragmentSpec, novel);
  const { className } = props;

  const isSmallScreen = useMediaQuery({ minWidth: SMALL });
  const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

  let textTruncate = 35;
  if (isSmallScreen) textTruncate = 35;
  if (isDesktopScreen) textTruncate = 40;

  const novelUrl = `/novel/${slug}`;
  const genreStr = (JSON.parse(genres) as string[]).reduce(
    (acc, curr, idx) => `${acc}${genres.length - 1 === idx ? ', ' : ''} ${curr}`,
    ''
  );

  return (
    <S.NovelThumbnailContainer className={className}>
      <Link to={novelUrl}>
        <S.NovelThumbnailImage src={coverImage} alt={title} />
      </Link>
      <S.NovelThumbnailContent>
        <S.NovelThumbnailSubtitle>{type}</S.NovelThumbnailSubtitle>
        <S.NovelThumbnailReadIconLink to={novelUrl}>
          <S.NovelThumbnailIconWrapper>
            <S.NovelThumbnailReadIcon />
          </S.NovelThumbnailIconWrapper>
        </S.NovelThumbnailReadIconLink>
        <S.NovelThumbnailHeading>{truncate(title, textTruncate)}</S.NovelThumbnailHeading>
        <S.NovelThumbnailGenre>{truncate(genreStr, textTruncate)}</S.NovelThumbnailGenre>
      </S.NovelThumbnailContent>
    </S.NovelThumbnailContainer>
  );
}

export default NovelThumbnail;
