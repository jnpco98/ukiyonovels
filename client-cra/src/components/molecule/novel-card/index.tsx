import React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';

import { novelCard_novel$key } from '../../../__generated__/novelCard_novel.graphql';

import * as S from './style';
import Thumbnail from '../../atom/thumbnail';

import { useMediaQuery } from 'react-responsive';
import { truncate, truncateNumber } from '../../../utilities/string';
import { SMALL, XXSMALL, MEDIUM } from '../../../settings/media';

const fragmentSpec = graphql`
  fragment novelCard_novel on Novel {
    slug
    title
    description
    coverImage
    type
    likes
    views
    lastModified
  }
`;

type Props = {
  className?: string;
  buttonText?: string;
  novel: novelCard_novel$key;
};

function renderMetadata({ lastModified, likes, views }: { lastModified: unknown; likes: number; views: number }) {
  return lastModified || likes || views ? (
    <S.InfoCardMeta>
      {lastModified && (
        <>
          <S.InfoCardCalendarIcon />
          <S.InfoCardText>{new Date(lastModified as string).toDateString()}</S.InfoCardText>
        </>
      )}
      {(likes || likes == 0) && (
        <>
          <S.InfoCardLikesIcon />
          <S.InfoCardText>{truncateNumber(likes, 1)}</S.InfoCardText>
        </>
      )}
      {(views || views == 0) && (
        <>
          <S.InfoCardViewsIcon />
          <S.InfoCardText>{truncateNumber(views, 1)}</S.InfoCardText>
        </>
      )}
    </S.InfoCardMeta>
  ) : (
    <></>
  );
}

function NovelCard(props: Props) {
  const { slug, title, description, coverImage, type, likes, views, lastModified } = useFragment(
    fragmentSpec,
    props.novel
  );
  const { className, buttonText } = props;

  const isXXSmallScreen = useMediaQuery({ minWidth: XXSMALL });
  const isSmallScreen = useMediaQuery({ minWidth: SMALL });
  const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

  let textTruncate = 100;
  if (isXXSmallScreen) textTruncate = 140;
  if (isSmallScreen) textTruncate = 250;
  if (isDesktopScreen) textTruncate = 350;

  const novelUrl = `/novel/${slug}`;

  return (
    <S.InfoCardContainer className={className}>
      <Thumbnail imgSrc={coverImage} link={novelUrl} />
      <S.InfoCardContent>
        <S.InfoCardTitle>{title}</S.InfoCardTitle>
        <S.InfoCardDescription HTMLString={truncate(description || '', textTruncate)} />
        <S.InfoCardMetaWrapper>
          {renderMetadata({ lastModified, likes, views })}
          {buttonText && (
            <S.InfoCardButtonContinue to={novelUrl}>{buttonText || 'Continue reading'}</S.InfoCardButtonContinue>
          )}
        </S.InfoCardMetaWrapper>
      </S.InfoCardContent>
    </S.InfoCardContainer>
  );
}

export default NovelCard;
