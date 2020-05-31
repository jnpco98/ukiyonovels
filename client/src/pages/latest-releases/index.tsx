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
import { createNovelFilterLink } from '../novels/[typeSlug]/[filterSlug]';

const SearchResults = styled(CardList).attrs({ cardType: 'standard' })``;

const LoadMoreButton = styled(Button)`
  width: 100%;
`;

function LatestReleases() {
  const { data: latestReleaseNovels, loading: latestReleaseNovelsLoading, error: latestReleaseNovelsError } = useNovelsQuery({ variables: { first: CARD_LIST_DEFAULT_FETCH, sortKey: 'createdAt', reverse: true } });

  return (
    <Page>
      <Layout layoutType="primarySecondary" main navOffset footerOffset>
        <Layout gutterRight>
          {
            latestReleaseNovelsLoading ? <div>Loading results</div> : latestReleaseNovelsError ? <div>Error</div> :
              <>
                <SearchResults
                  heading={`Latest Releases`}
                  contents={latestReleaseNovels.data.edges.map(({ node }) => 
                    ({ 
                      key: node.id,
                      heading: node.title, 
                      inline: arrayFromJson(node.genres).map(i => ({ key: i, label: i, link: createNovelFilterLink('genre', i) })), 
                      tabbed: [{ key: node.status, label: node.status, link: createNovelFilterLink('status', node.status)}, ...arrayFromJson(node.origins).map(i => ({ key: i, label: i, link: createNovelFilterLink('origin', i) }))],
                      thumbnail: node.coverImage, 
                      link: { href: `/novel/[novelSlug]`, as: `/novel/${node.slug}` } 
                    }))}
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