import React from 'react';
import Page from '@layout/Page';
import { t } from '@utilities/locales';

function NotFound() {
  return (
    <Page>
      <div style={{ height: '20rem' }} />
      {t('404.heading')}
      {t('404.content')}
    </Page>
  );
}

export default NotFound;
