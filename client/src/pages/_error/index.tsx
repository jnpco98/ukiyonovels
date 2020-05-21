import React from 'react';
import { NextPage } from 'next';
import Page from '@layout/Page';
import { t } from '@utilities/locales';

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <Page>
      {statusCode
        ? t('500.serverError').replace('{{statusCode}}', statusCode)
        : t('500.clientError')
      }
    </Page>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode;

  return { statusCode };
};

export default ErrorPage;