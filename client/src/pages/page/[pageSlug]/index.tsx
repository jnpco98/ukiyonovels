import React from 'react';
import { useRouter } from 'next/router';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import dynamic from 'next/dynamic';
import { usePageQuery } from '@schemas/apollo-queries';
import { withApollo } from '@utilities/apollo';

const DynamicHtml = dynamic(() => import('@components/molecule/DynamicHtml'), { ssr: false });

function StandardPage() {
  const router = useRouter();
  const { pageSlug } = router.query;

  const { data: pageData, loading: pageDataLoading, error: pageDataError } = usePageQuery({ variables: { slug: Array.isArray(pageSlug) ? pageSlug.pop() : pageSlug } });

  return (
    <Page>
      <Layout main navOffset footerOffset className={`page__${pageSlug}`}>
        {
          pageDataLoading ? <div>Loading</div> : (pageDataError || !pageData.data) ? <div>Error</div> :
            <DynamicHtml HTMLString={pageData.data.content} />
        }
      </Layout>
    </Page>
  );
}

export default withApollo({ ssr: process.env.NODE_ENV === 'production' })(StandardPage);