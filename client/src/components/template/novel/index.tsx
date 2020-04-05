import React, { ReactElement } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import { RouteComponentProps } from 'react-router-dom';
import Classifications from '../../molecule/classifications';
import * as S from './style';
import DynamicHTML from '../../molecule/dynamic-html';
import Accordion from '../../molecule/accordion';
import { slugify } from '../../../utilities/string';
import Loader, { LoaderType } from '../../atom/loaders';
import { novelQuery, novelQueryResponse, novelQueryVariables } from '../../../__generated__/novelQuery.graphql';
import { sidePanel_aggregates$key } from '../../../__generated__/sidePanel_aggregates.graphql';

const novelRelayQuery = graphql`
  query novelQuery($slug: String!) {
    result: novelBySlug(slug: $slug) {
      slug
      title
      description
      type
      genres
      tags
      origins
      authors
      artists
      year
      status
      alternativeNames
      relatedNovels
      recommendedNovels
      coverImage
    }
  }
`;

type Props = {
  appData: sidePanel_aggregates$key;
} & RouteComponentProps<{ slug: string }>;

function createNovelQuery(query: string[], path: string, isLink: boolean): { name: string; link: string }[] {
  return query.map(q => ({ name: q, link: isLink ? `${path}/${q}` : '#!' }));
}

interface NovelClassificationParams {
  heading: string;
  classification: string;

  path?: string;
  isLink?: boolean;
  isArrStr?: boolean;

  inline?: boolean;
}

function renderClassification({
  heading,
  classification,
  path,
  isLink = true,
  isArrStr = false,
  inline = false
}: NovelClassificationParams): ReactElement {
  let parsedClassifications: string[] = [];

  if (!classification) {
    parsedClassifications = [];
  } else if (isArrStr) {
    try {
      parsedClassifications = JSON.parse(classification) as string[];
    } catch (e) {
      parsedClassifications = [];
    }
  } else {
    parsedClassifications = [classification];
  }

  parsedClassifications = parsedClassifications.filter((c, idx, arr) => c && arr.indexOf(c) === idx);
  return (
    <Classifications
      headingText={heading}
      classifications={createNovelQuery(parsedClassifications, path, isLink)}
      inline={inline}
    />
  );
}

function renderNovel({ result }: novelQueryResponse): ReactElement {
  const {
    title,
    description,
    type,
    genres,
    tags,
    origins,
    authors,
    artists,
    year,
    status,
    alternativeNames,
    relatedNovels,
    recommendedNovels,
    coverImage
  } = result;

  return (
    <S.NovelWrapper>
      <S.NovelTitleWrapper>
        <S.NovelTitle>{title}</S.NovelTitle>
      </S.NovelTitleWrapper>

      <S.NovelContentWrapper>
        <S.NovelContent>
          <S.NovelPortraitWrapper>
            <S.NovelPortrait src={coverImage} />
          </S.NovelPortraitWrapper>

          {renderClassification({
            heading: 'Type',
            path: '/novels/type',
            classification: type,
            inline: true
          })}
          {renderClassification({
            heading: 'Genre',
            path: '/novels/genre',
            classification: genres,
            inline: true,
            isArrStr: true
          })}
          {renderClassification({
            heading: 'Tags',
            path: '/novels/tagged',
            classification: tags,
            inline: true,
            isArrStr: true
          })}
          {renderClassification({
            heading: 'Language',
            path: '/novels/language',
            classification: origins,
            isArrStr: true
          })}
          {renderClassification({
            heading: 'Author(s)',
            path: '/novels/author',
            classification: authors,
            isArrStr: true
          })}
          {renderClassification({
            heading: 'Artist(s)',
            path: '/novels/artist',
            classification: artists,
            isArrStr: true
          })}
          {renderClassification({
            heading: 'Year',
            path: '/novels/year',
            classification: (year || '').toString()
          })}
          {renderClassification({
            heading: 'Status',
            path: '/novels/status',
            classification: status
          })}
        </S.NovelContent>

        <S.NovelContent>
          <S.NovelDescriptionHeading>Description</S.NovelDescriptionHeading>
          <DynamicHTML HTMLString={description || `<p></p>`} />

          {renderClassification({
            heading: 'Alternative Names',
            classification: alternativeNames,
            isArrStr: true,
            isLink: false
          })}
          {renderClassification({
            heading: 'Related Series',
            path: '/novels/related',
            classification: relatedNovels,
            isArrStr: true
          })}
          {renderClassification({
            heading: 'You May Also Like',
            path: '/novels/recommendations',
            classification: recommendedNovels,
            isArrStr: true
          })}

          <Accordion accordionContent={[{ content: <p />, heading: 'Download novel' }]} />
        </S.NovelContent>
      </S.NovelContentWrapper>
    </S.NovelWrapper>
  );
}

function Novel(props: Props): ReactElement {
  const { match, appData } = props;
  const { slug } = match.params;
  const variables: novelQueryVariables = { slug };

  const { props: relayProps, error, retry } = useQuery<novelQuery>(novelRelayQuery, variables);

  if (error) return <div>{error.message}</div>;
  if (relayProps) {
    const { result } = relayProps;
    if (!result) return <div>404</div>;
    return (
      <S.NovelContainer>
        {renderNovel(relayProps)}
        <S.NovelSidePanel classifications={appData} />
      </S.NovelContainer>
    );
  }

  return <Loader type={LoaderType.Ring} />;
}

export default Novel;
