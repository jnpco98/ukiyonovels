import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components/macro';
import { BaseTheme } from '../settings/theme';

import * as S from './style';
import { navigation } from '../settings/config/settings.json';

import Header from '../components/organism/header';
import Home from '../components/template/home';
import Novel from '../components/template/novel';
import Novels from '../components/template/novels';
import PageNotFound from '../components/template/404';
import Search from '../components/template/search';
import Contact from '../components/template/contact';

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
              <Route exact path='/novels' render={props => <Novels {...props}/>}/>
              <Route exact path='/search' render={props => <Search {...props}/>}/>
              <Route exact path='/contact' render={props => <Contact {...props}/>}/>
              <Route component={PageNotFound}/>
            </Switch>
        </Router>
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;


  /* 
<LatestUpdates/>
<SearchPage/>
<StandardPage pageHeading={copyright.pageHeading} pageText={copyright.pageText}/>
<StandardPage pageHeading={privacy.pageHeading} pageText={privacy.pageText} contents={privacy.contents}/>
<StandardPage pageHeading={termsOfService.pageHeading} pageText={termsOfService.pageText} contents={termsOfService.contents} /> 
<Contact/> 
<Footer />

*/