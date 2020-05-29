import Layout from '@layout/Layout';
import Page from '@layout/Page';
import SidePanel from '@components/organism/SidePanel';
import CardList from '@components/organism/CardList';
import styled from 'styled-components';
import { withApollo } from '@utilities/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { LatestReleaseNovelsQuery, LatestReleaseNovelsQueryVariables } from '@schemas/apollo-components';
import { arrayFromJson } from '@utilities/json';
import Button from '@components/atom/Button';
import { cardResponsive } from '@components/molecule/Card';

const SearchResults = styled(CardList).attrs({ cardType: 'standard' })``;

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
const LoadMoreButton = styled(Button)`
  width: 100%;
`;

const RESULTS_PER_PAGE = 20;

function LatestReleases() {
  const { data: latestReleaseNovels, loading: latestReleaseNovelsLoading, error: latestReleaseNovelsError } = useQuery<LatestReleaseNovelsQuery, LatestReleaseNovelsQueryVariables>(LATEST_RELEASE_NOVELS_QUERY, { variables: { count: RESULTS_PER_PAGE } });

  return (
    <Page>
      <Layout layoutType="primarySecondary" main navOffset footerOffset>
        <Layout gutterRight>
          {
            latestReleaseNovelsLoading ? <div>Loading results</div> : latestReleaseNovelsError ? <div>Error</div> :
              <>
                <SearchResults
                  heading={`Latest Releases`}
                  contents={latestReleaseNovels.novels.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))}
                  responsive={cardResponsive}
                />
                <LoadMoreButton>Load More</LoadMoreButton>
              </>
          }
        </Layout>
        <SidePanel />
      </Layout>
    </Page>
  );
}

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(LatestReleases);