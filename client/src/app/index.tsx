import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components/macro';
import { BaseTheme } from '../settings/theme';

import * as S from './style';
import Header from '../components/organism/header';
import Home from '../components/template/home';

import { navigation } from '../settings/config/settings.json';
import Novel from '../components/template/novel';

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <S.AppContainer>
          <Router>
            <Header
              mainMenuItems={navigation.mainMenu}
              sideMenuItems={navigation.sidenavMenu}
            />
            <Switch>
              <Route exact path='/' render={props => <Home {...props}/>}/>
              <Route exact path='/novel/:slug' render={props => <Novel {...props}/>}/>
            </Switch>
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
