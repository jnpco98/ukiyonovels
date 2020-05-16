import React from 'react';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import SidePanel from '@components/organism/SidePanel';

function Novel() {
  return(
    <Page>
      <Layout layoutType="primarySecondary" main>
        <Layout gutterRight>
          
        </Layout>
        <SidePanel/>
      </Layout>
    </Page>
  );
}

export default Novel;