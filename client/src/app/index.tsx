/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components/macro';
import { graphql } from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import { BaseTheme } from '../settings/theme';

import * as S from './style';
import { navigation, termsOfService, privacy, copyright } from '../settings/config/settings.json';

import Header from '../components/organism/header';
import Home from '../components/template/home';
import Novel from '../components/template/novel';
import Novels from '../components/template/novels';
import PageNotFound from '../components/template/404';
import Search from '../components/template/search';
import Contact from '../components/template/contact';
import StandardPage from '../components/template/standard';
import Footer from '../components/organism/footer';
import { appQuery } from '../__generated__/appQuery.graphql';
import Loader, { LoaderType } from '../components/atom/loaders';

export const appRelayQuery = graphql`
  query appQuery {
    ...sidePanel_aggregates
    ...footer_aggregates
  }
`;

function App(): ReactElement {
  const { props: relayProps, error, retry } = useQuery<appQuery>(appRelayQuery);

  if (error) return <div>{error.message}</div>;
  if (relayProps)
    return (
      <ThemeProvider theme={BaseTheme}>
        <S.AppContainer>
          <Router>
            <Header mainMenuItems={navigation.mainMenu} sideMenuItems={navigation.sidenavMenu} />
            <Switch>
              <Route exact path="/" render={(props): ReactElement => <Home appData={relayProps} {...props} />} />
              <Route
                exact
                path="/novel/:slug"
                render={(props): ReactElement => <Novel appData={relayProps} {...props} />}
              />
              <Route
                exact
                path="/novels/:type?/:key?"
                render={(props): ReactElement => <Novels appData={relayProps} {...props} card />}
              />
              <Route
                exact
                path="/search"
                render={(props): ReactElement => <Search appData={relayProps} {...props} />}
              />
              <Route
                exact
                path="/terms-and-conditions"
                render={(props): ReactElement => (
                  <StandardPage
                    {...props}
                    pageHeading={termsOfService.pageHeading}
                    pageText={termsOfService.pageText}
                    contents={termsOfService.contents}
                  />
                )}
              />
              <Route
                exact
                path="/privacy-policy"
                render={(props): ReactElement => (
                  <StandardPage
                    {...props}
                    pageHeading={privacy.pageHeading}
                    pageText={privacy.pageText}
                    contents={privacy.contents}
                  />
                )}
              />
              <Route
                exact
                path="/copyright"
                render={(props): ReactElement => (
                  <StandardPage {...props} pageHeading={copyright.pageHeading} pageText={copyright.pageText} />
                )}
              />
              <Route exact path="/contact" render={(props): ReactElement => <Contact {...props} />} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer classifications={relayProps} />
          </Router>
        </S.AppContainer>
      </ThemeProvider>
    );
  return <Loader type={LoaderType.Ring} />;
}

export default App;
