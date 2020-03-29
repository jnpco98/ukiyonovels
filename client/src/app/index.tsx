import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components/macro';
import { BaseTheme } from '../settings/theme';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery, RenderProps } from 'relay-hooks';

import { appQuery } from '../__generated__/appQuery.graphql';
import { home_root$key } from '../__generated__/home_root.graphql';

import * as S from './style';
import Header from '../components/organism/header';
import Home from '../components/template/home';
import Loader, { LoaderType } from '../components/atom/loaders';

import { navigation } from '../settings/config/settings.json';
import Novel from '../components/template/novel';
import { novel_root$key } from '../__generated__/novel_root.graphql';

const query = graphql`
  query appQuery {
    ...home_root
    ...novel_root
  }
`;

const variables = {};

function render({ props: root, error, retry }: RenderProps<appQuery>) {
  if (error) {
    return <div><button onClick={() => retry()}>{error.message}</button></div>;
  }
  if (root) {
    return (
      <Switch>
        <Route exact path='/' render={props => <Home root={root as home_root$key} {...props}/>}/>
        <Route exact path='/novel/:slug' render={props => <Novel root={root as novel_root$key} {...props}/>}/>
      </Switch>
    );
  }

  return <Loader type={LoaderType.Ring} />;
}

function App() {
  const renderProps = useQuery<appQuery>(query, variables);

  return (
    <ThemeProvider theme={BaseTheme}>
      <S.AppContainer>
          <Router>
            <Header
              mainMenuItems={navigation.mainMenu}
              sideMenuItems={navigation.sidenavMenu}
            />
            {render(renderProps)}
        </Router>
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;


{
  /* 
<Header
    mainMenuItems={navigation.mainMenu}
    sideMenuItems={navigation.sidenavMenu}
/>  
<Home/>
<Novel/>
<Novels/> 
<LatestUpdates/>
<SearchPage/>
<StandardPage pageHeading={copyright.pageHeading} pageText={copyright.pageText}/>
<StandardPage pageHeading={privacy.pageHeading} pageText={privacy.pageText} contents={privacy.contents}/>
<StandardPage pageHeading={termsOfService.pageHeading} pageText={termsOfService.pageText} contents={termsOfService.contents} /> 
<PageNotFound />
<Contact/> 
<Footer />

*/
}

{
  /* 
    import Loader, { LoaderType } from '../components/atom/loaders';
    <Loader type={LoaderType.Ring} />
    <Loader type={LoaderType.DualRing} />
    <Loader type={LoaderType.Ellipsis} /> 
*/
}
