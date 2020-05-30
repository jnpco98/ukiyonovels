import { useRouter } from 'next/router';
import Layout from '@layout/Layout';
import Page from '@layout/Page';
import SidePanel from '@components/organism/SidePanel';
import CardList from '@components/organism/CardList';
import styled from 'styled-components';
import { withApollo } from '@utilities/apollo';
import { arrayFromJson } from '@utilities/json';
import Button from '@components/atom/Button';
import { cardResponsive } from '@components/molecule/Card';
import { useNovelsQuery } from '@schemas/apollo-queries';
import { CARD_LIST_DEFAULT_FETCH } from '@constants/fetch';

const SearchResults = styled(CardList).attrs({ cardType: 'standard' })``;

const LoadMoreButton = styled(Button)`
  width: 100%;
`;

function Search() {
  const router = useRouter();
  const { keyword } = router.query;

  const { data: searchResults, loading: searchResultsLoading, error: searchResultsError } = useNovelsQuery({
    variables: {
      first: CARD_LIST_DEFAULT_FETCH,
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
                  heading={`Found ${searchResults.data.totalCount} results for keyword "${keyword}"`}
                  contents={searchResults.data.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))}
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