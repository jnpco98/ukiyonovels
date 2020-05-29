import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import SidePanel from '@components/organism/SidePanel';
import Text, { TextType } from '@components/atom/Text';
import * as M from '@utilities/media';
import NovelInfo, { NovelInfoContent } from '@components/organism/NovelInfo';
import { t } from '@utilities/locales';
import List from '@components/molecule/List';
import { Responsive } from '@utilities/mixins';
import dynamic from 'next/dynamic';
import { NovelInfoQuery, NovelChapterListQuery, NovelInfoQueryVariables, NovelChapterListQueryVariables } from '@schemas/apollo-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from '@utilities/apollo';
import { arrayFromJson } from '@utilities/json';
import moment from 'moment';
import { RowContent } from '@components/atom/Row';
import { Wrapper as RowWrapper } from '@components/atom/Row/style';

const DynamicHtml = dynamic(() => import('@components/molecule/DynamicHtml'), { ssr: false });
const NOVEL_INFO_QUERY = gql`
  query NovelInfo($slug: String!) {
    novelBySlug(slug: $slug){
      id, title, slug, description, type, tags, genres, 
      origins, authors, artists, alternativeNames, coverImage, 
      likes, views, status, year
    }
  }
`;

const NOVEL_CHAPTER_LIST_QUERY = gql`
  query NovelChapterList($first: Float!, $after: String, $where: ChapterWhere) {
    chapters(first: $first, after: $after, where: $where, sortKey: "idx", reverse: true) {
      pageInfo { hasNextPage, endCursor }
      edges {
        node {
          slug, title, lastModified, idx
        }
      }
    }
  }
`;
export type NovelInfo = {
  title: string;
  description: string;
  alternativeNames: string[];
  relatedNovels: string[];
  recommendedNovels: string[];
} & NovelInfoContent;

const CHAPTERS_PER_PAGE = 50;

const Wrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    width: 100%;
  }

  ${M.MEDIA_XSMALL} {
    flex-direction: row;

    & > *:nth-child(1) {
      width: 30%;
    }

    & > *:nth-child(2) {
      width: 70%;
    }
  }
`;

const SubHeading = styled(Text).attrs({ textType: TextType.SubsectionTitle })`
  margin-bottom: 1rem;
`;

const Description = styled.div`
  margin-bottom: 1rem;
`;

const ChapterList = styled(List)`
  margin-bottom: 3rem;
`;

const chapterListResponsive: Responsive = {
  itemsPerRow: 2,
  gap: 0.7,
  breakpoints: {}
};

function Novel() {
  const router = useRouter();
  const { novelSlug } = router.query;
  const {
    descriptionHeading,
    alternativeNamesHeading,
    chapterListHeading
  } = t('novel');

  const { data: novelInfo, loading: novelInfoLoading, error: novelInfoError } = useQuery<NovelInfoQuery, NovelInfoQueryVariables>(NOVEL_INFO_QUERY, { variables: { slug: Array.isArray(novelSlug) ? novelSlug.pop() : novelSlug }});
  const initialVariables: NovelChapterListQueryVariables = { first: CHAPTERS_PER_PAGE };
  if(novelInfo && novelInfo.novelBySlug.id) initialVariables.where = { AND: [{ novelId: { is: novelInfo.novelBySlug.id } }] };

  const { data: novelChapters, loading: novelChaptersLoading, error: novelChaptersError } = useQuery<NovelChapterListQuery, NovelChapterListQueryVariables>(NOVEL_CHAPTER_LIST_QUERY, { variables: initialVariables });

  function renderInfo(heading: string, data: string[], dynamicHtml?: boolean) {
    if(!data || !data.length) return <></>;
    return (
      <Description>
        <SubHeading>{heading}</SubHeading>
        {data.map((info, idx) =>
          dynamicHtml ? <DynamicHtml key={idx} HTMLString={info} /> : <Text key={idx}>{info}</Text>
        )}
      </Description>
    );
  }

  function generateNovelChapterList(data: NovelChapterListQuery): RowContent[] {
    if(!data || !data.chapters || !data.chapters.edges) return [];
    const chapters  = data.chapters.edges;

    return chapters.map(({ node }) => {
      const date = moment(node.lastModified).format('ddd, MMMM Do');
      const link = { href: '/novel/[novelSlug]/[chapterSlug]', as: `/novel/${Array.isArray(novelSlug) ? novelSlug.pop() : novelSlug}/${node.slug}`}
      return {
        title: node.title, 
        link, linkSecondary: link, 
        secondary: `${node.idx}`,
        subtitle: date || ''
      } 
    });
  }

  function generateNovelContent(data: NovelInfoQuery) {
    if(!data || !data.novelBySlug) return null;
    const { coverImage, type, genres, tags, origins, authors, artists, year, status } = data.novelBySlug;
    const content = {
      coverImage,
      type,
      genres: arrayFromJson(genres),
      tags: arrayFromJson(tags),
      origins: arrayFromJson(origins),
      authors: arrayFromJson(authors),
      artists: arrayFromJson(artists),
      year: year ? year.toString() : null,
      status: status
    }

    return content;
  }

  return (
    <Page>
      <Layout layoutType="primarySecondary" main navOffset>
        <Layout gutterRight>
            {
              novelInfoLoading ? <div>Loading</div> : novelInfoError ? <div>Error</div> :
              <>
                <Text textType={TextType.PageTitle}>{novelInfo.novelBySlug.title}</Text>
                <Wrapper>
                  <NovelInfo content={generateNovelContent(novelInfo)} gutterRight />
                  <Layout>
                    {renderInfo(descriptionHeading, [novelInfo.novelBySlug.description], true)}
                    {renderInfo(alternativeNamesHeading, arrayFromJson(novelInfo.novelBySlug.alternativeNames))}
                    {
                      novelChaptersLoading ? <div>Loading</div> : novelChaptersError ? <div>Error</div> :
                      <ChapterList
                        heading={chapterListHeading}
                        contents={generateNovelChapterList(novelChapters)}
                        responsive={chapterListResponsive}
                        maxHeight="30rem"
                        rowType="alternate"
                      />
                    }
                  </Layout>
                </Wrapper>
              </>
            }
        </Layout>
        <SidePanel />
      </Layout>
    </Page>
  );
}

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(Novel);