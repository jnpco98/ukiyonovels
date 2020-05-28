import { useRouter } from 'next/router';
import Layout from '@layout/Layout';
import Page from '@layout/Page';
import SidePanel from '@components/organism/SidePanel';
import CardList from '@components/organism/CardList';
import styled from 'styled-components';
import { Responsive } from '@utilities/mixins';
import * as M from '@utilities/media';
import { withApollo } from '@utilities/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { SearchQuery, SearchQueryVariables } from '@schemas/apollo-components';
import { arrayFromJson } from '@utilities/json';
import Button from '@components/atom/Button';

const SearchResults = styled(CardList).attrs({ cardType: 'wide' })``;

const cardResponsive: Responsive = {
  itemsPerRow: 1,
  gap: 0.2,
  breakpoints: {
    [M.MEDIA_XXSMALL]: {
      itemsPerRow: 2,
      gap: 0.4
    },
    [M.MEDIA_SMALL]: {
      itemsPerRow: 2,
      gap: 0.7
    }
  }
};

const SEARCH_QUERY = gql`
  query Search($where: NovelWhere, $count: Float) {
    novels(first: $count, where: $where) {
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

function Search() {
  const router = useRouter();
  const { keyword } = router.query;
  
  const { data: searchResults, loading: searchResultsLoading, error: searchResultsError } = useQuery<SearchQuery, SearchQueryVariables>(SEARCH_QUERY, {
    variables: {
      count: RESULTS_PER_PAGE,
      where: { AND: [{ title: { search: Array.isArray(keyword) ? keyword[0] : keyword } }] }
    }
  });

  return (
    <Page>
      <Layout layoutType="primarySecondary" main navOffset footerOffset>
        <Layout gutterRight>
          {
            !keyword ? <SearchResults heading={`Empty keyword`} contents={[]} responsive={cardResponsive} /> :
            searchResultsLoading ? <div>Loading results</div> : searchResultsError ? <div>Error</div> :
              <>
                <SearchResults
                  heading={`Found ${searchResults.novels.totalCount} results for keyword "${keyword}"`}
                  contents={searchResults.novels.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage }))}
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

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(Search);