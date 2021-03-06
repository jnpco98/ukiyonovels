import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import SidePanel from '@components/organism/SidePanel';
import Text, { TextType } from '@components/atom/Text';
import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useChapterQuery, ChapterQuery } from '@schemas/apollo-queries';
import { withApollo } from '@utilities/apollo';
import ConditionalWrapper from '@components/atom/ConditionalWrapper';

const DynamicHtml = dynamic(() => import('@components/molecule/DynamicHtml'), { ssr: false });


const Content = styled(Text)`
  margin-bottom: 6rem;
`;

const NovelTitle = styled(Text).attrs({ textType: TextType.Anchor })`
  font-family: ${({ theme }) => theme.font.secondary};
`;

const ChapterTitle = styled(Text).attrs({ textType: TextType.PageTitle })`
  margin-top: 0.1rem;
  margin-bottom: 2rem;
`;

const PaginationControllerContainers = styled.div`
  display: flex;
`;

const PreviousButton = styled(Text).attrs({ textType: TextType.Anchor })`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const NextButton = styled(Text).attrs({ textType: TextType.Anchor })`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

function Chapter() {
  const router = useRouter();
  const { novelSlug, chapterSlug } = router.query;

  const { data: chapterData, loading: chaptersLoading, error: chaptersError } = useChapterQuery({ variables: { novelSlug: Array.isArray(novelSlug) ? novelSlug.pop() : novelSlug, chapterSlug: Array.isArray(chapterSlug) ? chapterSlug.pop() : chapterSlug } });

  function generateChapterContent(chapter: ChapterQuery) {
    if(!chapter.data.edges.length) return null;
    const { title: novelTitle, chapters } = chapter.data.edges[0].node;
    const { title: chapterTitle, content, previousChapter, nextChapter } = chapters.edges[0].node;

    if(!chapterTitle || !novelTitle || !content) return null;

    return(
      <>
        <ConditionalWrapper condition={!!novelSlug} wrapper={children => <Link href={`/novel/[novelSlug]`} as={`/novel/${novelSlug}`} passHref>{children}</Link>}>
          <NovelTitle>{novelTitle}</NovelTitle>
        </ConditionalWrapper>
        <ChapterTitle>{chapterTitle}</ChapterTitle>
        <Content>{<DynamicHtml HTMLString={content} />}</Content>
        <PaginationControllerContainers>
          {previousChapter && previousChapter.slug && <Link href={`/novel/[novelSlug]/[chapterSlug]`} as={`/novel/${novelSlug}/${previousChapter.slug}`} passHref><PreviousButton><span>Previous</span><span>{previousChapter.title}</span></PreviousButton></Link>}
          {nextChapter && nextChapter.slug && <Link href={`/novel/[novelSlug]/[chapterSlug]`} as={`/novel/${novelSlug}/${nextChapter.slug}`} passHref><NextButton><span>Next</span><span>{nextChapter.title}</span></NextButton></Link>}
        </PaginationControllerContainers>
      </>
    );
  }

  return (
    <Page>
      <Layout layoutType="primarySecondary" main navOffset>
        <Layout gutterRight>
          {
            chaptersLoading ? <div>Loading</div> : chaptersError ? <div>Error</div> :
              generateChapterContent(chapterData)
          }
        </Layout>
        <SidePanel />
      </Layout>
    </Page>
  );
}

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(Chapter);