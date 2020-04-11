import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseTheme } from '@utilities/theme';
import Reset from '@utilities/reset';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={BaseTheme}>
        <Reset />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default App;
