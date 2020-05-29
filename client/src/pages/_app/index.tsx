import React, { useEffect } from 'react';
import Head from 'next/head';
import { NextPageContext, NextComponentType } from 'next';
import { ThemeProvider } from 'styled-components';
import { BaseTheme } from '@utilities/theme';
import Reset from '@utilities/reset';
import Animate from '@utilities/animate';
import Trumps from '@utilities/trumps';
import { initializeGoogleAnalytics } from '@utilities/analytics';
import { SITE_TITLE } from '@constants/site';
import Simplebar from 'simplebar-react';

import 'swiper/css/swiper.min.css';
import 'simplebar/dist/simplebar.min.css';

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
};

function App(props: Props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  return (
    <ThemeProvider theme={BaseTheme}>
      <Reset />
      <Animate />
      <Trumps />
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <Simplebar style={{ maxHeight: '100vh' }}>
        <Component {...pageProps} />
      </Simplebar>
    </ThemeProvider>
  );
}

export default App;
