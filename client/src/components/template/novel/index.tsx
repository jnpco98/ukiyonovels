import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import Classifications from '../../molecule/classifications';
import * as S from './style';
import DynamicHTML from '../../molecule/dynamic-html';
import Accordion from '../../molecule/accordion';
import { useRefetch, useQuery } from 'relay-hooks';
import { slugify } from '../../../utilities/string';
import { RouteComponentProps } from 'react-router-dom';
import Loader, { LoaderType } from '../../atom/loaders';
import { novelQuery, novelQueryResponse, novelQueryVariables } from '../../../__generated__/novelQuery.graphql';

const novelRelayQuery = graphql`
  query novelQuery($novelBySlug: NovelWhere) {
    result: novels (
      first: 1
      where: $novelBySlug
    ) @connection(key: "novels_result") {
      edges {
        node {
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
    }
  }
`;

type Props = {} & RouteComponentProps<{ slug: string }>;

function createNovelQuery(query: string[], path: string, isLink: boolean) {
  return query.map(q => ({ name: q, link: isLink ? `${path}/${slugify(q)}` : '#!' }));
}

interface NovelClassificationParams {
  heading: string;
  classification: string;

  path: string;
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
}: NovelClassificationParams) {
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

  parsedClassifications = parsedClassifications.filter(
    (c, idx, arr) => c && arr.indexOf(c) === idx
  );
  return (
    <Classifications
      headingText={heading}
      classifications={createNovelQuery(parsedClassifications, path, isLink)}
      inline={inline}
    />
  );
}

function renderNovel({ result }: novelQueryResponse) {
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
  } = result.edges[0].node;

  return (
    <S.NovelContainer>
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
              path: '/type',
              classification: type,
              inline: true
            })}
            {renderClassification({
              heading: 'Genre',
              path: '/genre',
              classification: genres,
              inline: true,
              isArrStr: true
            })}
            {renderClassification({
              heading: 'Tags',
              path: '/tag',
              classification: tags,
              inline: true,
              isArrStr: true
            })}
            {renderClassification({
              heading: 'Language',
              path: '/language',
              classification: origins,
              isArrStr: true
            })}
            {renderClassification({
              heading: 'Author(s)',
              path: '/author',
              classification: authors,
              isArrStr: true
            })}
            {renderClassification({
              heading: 'Artist(s)',
              path: '/artist',
              classification: artists,
              isArrStr: true
            })}
            {renderClassification({
              heading: 'Year',
              path: '/year',
              classification: (year || '').toString()
            })}
            {renderClassification({
              heading: 'Status',
              path: '/status',
              classification: status
            })}
          </S.NovelContent>

          <S.NovelContent>
            <S.NovelDescriptionHeading>Description</S.NovelDescriptionHeading>
            <DynamicHTML HTMLString={description || `<p></p>`} />

            {renderClassification({
              heading: 'Alternative Names',
              path: '/novel',
              classification: alternativeNames,
              isArrStr: true,
              isLink: false
            })}
            {renderClassification({
              heading: 'Related Series',
              path: '/novel',
              classification: relatedNovels,
              isArrStr: true
            })}
            {renderClassification({
              heading: 'You May Also Like',
              path: '/novel',
              classification: recommendedNovels,
              isArrStr: true
            })}

            <Accordion
              accordionContent={[{ content: <p></p>, heading: 'Download novel' }]}
            />
          </S.NovelContent>
        </S.NovelContentWrapper>
      </S.NovelWrapper>

      <S.NovelSidePanel />
    </S.NovelContainer>
  );
}

function Novel(props: Props) {
  const { slug } = props.match.params;
  const variables: novelQueryVariables = { novelBySlug: { AND: [ { slug: { is: slug } } ] } };

  const { props: relayProps, error, retry } =  useQuery<novelQuery>(novelRelayQuery, variables);

  if(error) return <div>{error.message}</div>
  if(relayProps) {
    const { result } = relayProps;
    if(!result.edges.length) return <div>404</div>
    return renderNovel(relayProps);
  }

  return <Loader type={LoaderType.Ring}/>
}

export default Novel;
