import React from 'react';
import styled from 'styled-components';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import CardCarousel from '@components/organism/CardCarousel';
import SidePanel from '@components/organism/SidePanel';
import { withApollo } from '@utilities/apollo';
import { t } from '@utilities/locales';
import * as M from '@utilities/media';
import { useNovelsQuery, useChapterListWithNovelQuery } from '@schemas/apollo-queries';
import { arrayFromJson } from '@utilities/json';
import List from '@components/molecule/List';
import moment from 'moment';
import { DATE_FORMAT } from '@constants/format';

const MainLayout = styled(Layout).attrs({ main: true })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    width: 100%;
  }

  ${M.MEDIA_MEDIUM} {
    flex-direction: row;

    & > *:nth-child(1) {
      width: 66%;
    }

    & > *:nth-child(2) {
      width: 34%;
    }
  }
`;

const TopNovels = styled(CardCarousel)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
`;

const LatestReleases = styled(List)`
  margin: 0 auto;
  margin-bottom:4.5rem;
`;

const NewNovels = styled(CardCarousel)`
  margin: 0 auto;
  margin-bottom: 1rem;
`;

// const { data, error, loading, refetch: _refetch } = useQuery(indexPage);
// const refetch = useCallback(() => { setTimeout(() => _refetch(), 0) }, [_refetch]);

const CAROUSEL_DEFAULT_FETCH = 10;
const LIST_DEFAULT_FETCH = 40;

function Index() {
  const { data: topNovels, loading: topNovelsLoading, error: topNovelsError } = useNovelsQuery({ variables: { first: CAROUSEL_DEFAULT_FETCH, sortKey: 'views' } });
  const { data: latestReleaseChapters, loading: latestReleaseChaptersLoading, error: latestReleaseChaptersError } = useChapterListWithNovelQuery({ variables: { first: LIST_DEFAULT_FETCH, sortKey: 'lastModified' } })
  const { data: newNovels, loading: newNovelsLoading, error: newNovelsError } = useNovelsQuery({ variables: { first: CAROUSEL_DEFAULT_FETCH, sortKey: 'createdAt' } });
  
  return (
    <Page>
      <MainLayout navOffset>
        <Layout gutterRight>
          {topNovelsLoading ? <div>Loading</div> : topNovelsError ? <div>Error</div> :
            <TopNovels heading={t('homepage.topNovels.heading')} contents={topNovels.data.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))} />
          }
          {latestReleaseChaptersLoading ? <div>Loading</div> : latestReleaseChaptersError ? <div>Error</div> :
            <LatestReleases
              heading={t('homepage.latestReleases.heading')}
              contents={latestReleaseChapters.data.edges.map(({ node }) => ({ title: node.novel.title, secondary: node.title, subtitle: moment(node.createdAt).format(DATE_FORMAT), link: { href: `/novel/[novelSlug]`, as: `/novel/${node.novel.slug}` }, linkSecondary: { href: `/novel/[novelSlug]/[chapterSlug]`, as: `/novel/${node.novel.slug}/${node.slug}` } }))}
              rowType="preview"
              maxHeight="40rem"       
            />
          }
          {newNovelsLoading ? <div>Loading</div> : newNovelsError ? <div>Error</div> :
            <NewNovels heading={t('homepage.newNovels.heading')} contents={newNovels.data.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))} />
          }
        </Layout>
        <SidePanel />
      </MainLayout>
    </Page>
  );
}

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(Index);
