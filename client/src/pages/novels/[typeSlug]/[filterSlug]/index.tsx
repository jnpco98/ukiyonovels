import { useRouter } from 'next/router';
import Layout from '@layout/Layout';
import Page from '@layout/Page';
import SidePanel from '@components/organism/SidePanel';
import CardList from '@components/organism/CardList';
import styled from 'styled-components';
import { withApollo } from '@utilities/apollo';
import { useNovelsQuery } from '@schemas/apollo-queries';
import { arrayFromJson } from '@utilities/json';
import Button from '@components/atom/Button';
import { cardResponsive } from '@components/molecule/Card';
import { CARD_LIST_DEFAULT_FETCH } from '@constants/fetch';

const SearchResults = styled(CardList).attrs({ cardType: 'standard' })``;

const LoadMoreButton = styled(Button)`
  width: 100%;
`;

function getFilterType(filter: string) {
  switch(filter) {
    case 'tagged': return 'tags';
    case 'genre': return 'genres';
    case 'status': return 'status';
    default: return null;
  }
}

function Novels() {
  const router = useRouter();
  const { typeSlug, filterSlug } = router.query;

  const type = getFilterType((Array.isArray(typeSlug) ? typeSlug[0] : typeSlug));
  const filter = (Array.isArray(filterSlug) ? filterSlug[0] : filterSlug);
  
  const { data: filteredResults, loading: filteredResultsLoading, error: filteredResultsError } = useNovelsQuery({
    variables: {
      first: CARD_LIST_DEFAULT_FETCH,
      where: { AND: [{ [type]: { contains: filter } }] }
    }
  });

  return (
    <Page>
      <Layout layoutType="primarySecondary" main navOffset footerOffset>
        <Layout gutterRight>
          {
            filteredResultsLoading ? <div>Loading results</div> : (filteredResultsError || !type) ? <div>Error</div> :
              <>
                <SearchResults
                  heading={`Found ${filteredResults.data.totalCount} results for ${type}: "${filter}"`}
                  contents={filteredResults.data.edges.map(({ node }) => ({ heading: node.title, inline: arrayFromJson(node.genres), tabbed: [node.status, ...arrayFromJson(node.origins)], thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))}
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

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(Novels);  