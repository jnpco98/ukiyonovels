import { NextPageContext, NextComponentType } from 'next';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseTheme } from '@utilities/theme';
import Reset from '@utilities/reset';

import 'swiper/css/swiper.min.css';

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
};

function App(props: Props) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={BaseTheme}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
