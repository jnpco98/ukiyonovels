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
import { useNovelQuery, ChapterWhere, useChapterListWithNovelQuery, ChapterListWithNovelQuery, NovelQuery } from '@schemas/apollo-queries';
import { withApollo } from '@utilities/apollo';
import { arrayFromJson } from '@utilities/json';
import moment from 'moment';
import { RowContent } from '@components/atom/Row';
import { DATE_FORMAT } from '@constants/format';
import { LIST_DEFAULT_FETCH } from '@constants/fetch';

const DynamicHtml = dynamic(() => import('@components/molecule/DynamicHtml'), { ssr: false });

export type NovelInfo = {
  title: string;
  description: string;
  alternativeNames: string[];
  relatedNovels: string[];
  recommendedNovels: string[];
} & NovelInfoContent;

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

  const { data: novelInfo, loading: novelInfoLoading, error: novelInfoError } = useNovelQuery({ variables: { slug: Array.isArray(novelSlug) ? novelSlug.pop() : novelSlug } });

  const novelChaptersWhere: ChapterWhere = novelInfo && novelInfo.data && novelInfo.data.id ? { AND: [{ novelId: { is: novelInfo.data.id } }] } : null;
  const { data: novelChapters, loading: novelChaptersLoading, error: novelChaptersError } = useChapterListWithNovelQuery({ variables: { first: LIST_DEFAULT_FETCH, where: novelChaptersWhere, reverse: true, sortKey: 'createdAt' } })

  function renderInfo(heading: string, data: string[], dynamicHtml?: boolean) {
    if(!data || !data.length) return <></>;
    return (
      <Description>
        <SubHeading>{heading}</SubHeading>
        {data.map(info =>
          dynamicHtml ? <DynamicHtml key={info} HTMLString={info} /> : <Text key={info}>{info}</Text>
        )}
      </Description>
    );
  }

  function generateNovelChapterList(chapters: ChapterListWithNovelQuery): RowContent[] {
    if(!chapters || !chapters.data || !chapters.data.edges) return [];

    return chapters.data.edges.map(({ node }) => {
      const date = moment(node.createdAt).format(DATE_FORMAT);
      const link = { href: '/novel/[novelSlug]/[chapterSlug]', as: `/novel/${Array.isArray(novelSlug) ? novelSlug.pop() : novelSlug}/${node.slug}`}
      return {
        title: node.title, 
        link, linkSecondary: link, 
        secondary: `${node.idx}`,
        subtitle: date || '',
        key: `${node.id}`
      } 
    });
  }

  function generateNovelContent(novel: NovelQuery) {
    if(!novel || !novel.data) return null;
    const { coverImage, type, genres, tags, origins, authors, artists, year, status } = novel.data;

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

  function renderChapterContent() {
    const chapterList = generateNovelChapterList(novelChapters);
    if(!chapterList.length) return<div>No chapters found</div>
    return(                      
    <ChapterList
      heading={chapterListHeading}
      contents={chapterList}
      responsive={chapterListResponsive}
      maxHeight="30rem"
      rowType="alternate"
    />);
  }

  return (
    <Page>
      <Layout layoutType="primarySecondary" main navOffset>
        <Layout gutterRight>
            {
              novelInfoLoading ? <div>Loading</div> : (novelInfoError || !novelInfo.data) ? <div>Error</div> :
              <>
                <Text textType={TextType.PageTitle}>{novelInfo.data.title}</Text>
                <Wrapper>
                  <NovelInfo content={generateNovelContent(novelInfo)} gutterRight />
                  <Layout>
                    {renderInfo(descriptionHeading, [novelInfo.data.description], true)}
                    {renderInfo(alternativeNamesHeading, arrayFromJson(novelInfo.data.alternativeNames))}
                    {
                      novelChaptersLoading ? <div>Loading</div> : (novelChaptersError || !novelChapters.data) ? <div>Error</div> :
                      renderChapterContent()
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