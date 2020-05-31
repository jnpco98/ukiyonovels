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

export type NovelFilter = 'tagged' | 'genre' | 'status' | 'year' | 'artist' | 'author' | 'origin' | 'type';

function getFilterType(filter: NovelFilter) {
  switch(filter) {
    case 'tagged': return 'tags';
    case 'genre': return 'genres';
    case 'status': return 'status';
    case 'year': return 'year';
    case 'artist': return 'artists';
    case 'author': return 'authors';
    case 'origin': return 'origins';
    case 'type': return 'type';
    default: return null;
  }
}

export function createNovelFilterLink(filter: NovelFilter, slug: string) {
  return { as: `/novels/${filter}/${slug}`, href: `/novels/[typeSlug]/[filterSlug]` };
}

function Novels() {
  const router = useRouter();
  const { typeSlug, filterSlug } = router.query;

  const type = getFilterType((Array.isArray(typeSlug) ? typeSlug[0] : typeSlug) as NovelFilter);
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
                  contents={filteredResults.data.edges.map(({ node }) => 
                  ({ key: node.id, heading: node.title, 
                    inline: arrayFromJson(node.genres).map(i => ({ key: i, label: i, link: createNovelFilterLink('genre', i) })), 
                    tabbed: [{ key: node.status, label: node.status, link: createNovelFilterLink('status', node.status)}, ...arrayFromJson(node.origins).map(i => ({ key: i, label: i, link: createNovelFilterLink('origin', i) }))],
                    thumbnail: node.coverImage, link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } }))}
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