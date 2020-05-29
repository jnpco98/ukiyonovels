import React from 'react';
import styled from 'styled-components';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import CardCarousel from '@components/organism/CardCarousel';
import CardList from '@components/organism/CardList';
import SidePanel from '@components/organism/SidePanel';
import { withApollo } from '@utilities/apollo';
import { t } from '@utilities/locales';
import * as M from '@utilities/media';
import { TopNovelsQuery, TopNovelsQueryVariables, LatestReleaseNovelsQuery, LatestReleaseNovelsQueryVariables, NewNovelsQuery, NewNovelsQueryVariables } from '@schemas/apollo-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { arrayFromJson } from '@utilities/json';
import { wideCardResponsive } from '@components/molecule/WideCard';

const TOP_NOVELS_QUERY = gql`
  query TopNovels($where: NovelWhere, $count: Float) {
    novels(first: $count, where: $where, sortKey: "views") {
      totalCount
      edges {
        node {
          id, slug, title, genres, origins, status, coverImage
        }
      }
    }
  }
`;

const LATEST_RELEASE_NOVELS_QUERY = gql`
  query LatestReleaseNovels($where: NovelWhere, $count: Float) {
    novels(first: $count, where: $where, sortKey: "lastModified", reverse: true) {
      totalCount
      edges {
        node {
          id, slug, title, genres, origins, status, coverImage
        }
      }
    }
  }
`;

const NEW_NOVELS_QUERY = gql`
  query NewNovels($where: NovelWhere, $count: Float) {
    novels(first: $count, where: $where, sortKey: "createdAt", reverse: true) {
      totalCount
      edges {
        node {
          id, slug, title, genres, origins, status, coverImage
        }
      }
    }
  }
`;

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
  margin-bottom: 3rem;

  ${M.MEDIA_MEDIUM} {
    margin-top: 2rem;
  }
`;

const NewNovels = styled(CardCarousel)`
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const LatestReleases = styled(CardList)`
  margin: 0 auto;
  margin-bottom: 3rem;
`;

// const { data, error, loading, refetch: _refetch } = useQuery(indexPage);
// const refetch = useCallback(() => { setTimeout(() => _refetch(), 0) }, [_refetch]);
function Index(props: any) {
  const { data: topNovels, loading: topNovelsLoading, error: topNovelsError } = useQuery<TopNovelsQuery, TopNovelsQueryVariables>(TOP_NOVELS_QUERY, { variables: { count: 10 } });
  const { data: latestReleaseNovels, loading: latestReleaseNovelsLoading, error: latestReleaseNovelsError } = useQuery<LatestReleaseNovelsQuery, LatestReleaseNovelsQueryVariables>(LATEST_RELEASE_NOVELS_QUERY, { variables: { count: 6 } });
  const { data: newNovels, loading: newNovelsLoading, error: newNovelsError } = useQuery<NewNovelsQuery, NewNovelsQueryVariables>(NEW_NOVELS_QUERY, { variables: { count: 10 } });

  return (
    <Page>
      <MainLayout navOffset>
        <Layout gutterRight>
          {topNovelsLoading ? <div>Loading</div> : topNovelsError ? <div>Error</div> :
            <TopNovels heading={t('homepage.topNovels.heading')} contents={topNovels.novels.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))} />
          }
          {latestReleaseNovelsLoading ? <div>Loading</div> : latestReleaseNovelsError ? <div>Error</div> :
            <LatestReleases
              heading={t('homepage.latestReleases.heading')}
              contents={latestReleaseNovels.novels.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))}
              cardType="wide"
              responsive={wideCardResponsive}
            />
          }
          {newNovelsLoading ? <div>Loading</div> : newNovelsError ? <div>Error</div> :
            <NewNovels heading={t('homepage.newNovels.heading')} contents={newNovels.novels.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))} />
          }
        </Layout>
        <SidePanel />
      </MainLayout>
    </Page>
  );
}

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(Index);
