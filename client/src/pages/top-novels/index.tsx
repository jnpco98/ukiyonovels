import Layout from '@layout/Layout';
import Page from '@layout/Page';
import SidePanel from '@components/organism/SidePanel';
import CardList from '@components/organism/CardList';
import styled from 'styled-components';
import { withApollo } from '@utilities/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { TopNovelsQuery, TopNovelsQueryVariables } from '@schemas/apollo-components';
import { arrayFromJson } from '@utilities/json';
import Button from '@components/atom/Button';
import { cardResponsive } from '@components/molecule/Card';

const SearchResults = styled(CardList).attrs({ cardType: 'standard' })``;

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

const LoadMoreButton = styled(Button)`
  width: 100%;
`;

const RESULTS_PER_PAGE = 20;

function TopNovels() {
  const { data: topNovels, loading: topNovelsLoading, error: topNovelsError } = useQuery<TopNovelsQuery, TopNovelsQueryVariables>(TOP_NOVELS_QUERY, { variables: { count: RESULTS_PER_PAGE } });

  return (
    <Page>
      <Layout layoutType="primarySecondary" main navOffset footerOffset>
        <Layout gutterRight>
          {
            topNovelsLoading ? <div>Loading results</div> : topNovelsError ? <div>Error</div> :
              <>
                <SearchResults
                  heading={`Top Novels`}
                  contents={topNovels.novels.edges.map(({ node }, idx) => ({ heading: `#${idx + 1} ${node.title}`, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))}
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

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(TopNovels);