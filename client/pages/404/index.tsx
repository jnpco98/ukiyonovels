import React from 'react';
import { NOT_FOUND } from '@language/';
import Page from '@layout/Page';

function NotFound() {
  return(
    <Page>
      <div style={{ height: '20rem' }}/>
      {NOT_FOUND.heading}
    </Page>
  );
}

export default NotFound;
