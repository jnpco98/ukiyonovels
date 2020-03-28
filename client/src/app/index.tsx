import React from 'react';

import { ThemeProvider } from 'styled-components/macro';
import { BaseTheme } from '../settings/theme';

import { graphql } from 'babel-plugin-relay/macro';
import { useQuery, RenderProps } from 'relay-hooks';

import { appQuery } from '../__generated__/appQuery.graphql';
import { home_root$key } from '../__generated__/home_root.graphql';

import { AppContainer } from './style';
import Home from '../components/template/home';
import Loader, { LoaderType } from '../components/atom/loaders';

const query = graphql`
  query appQuery {
    ...home_root
  }
`;

const variables = {};

function render({ props, error, retry }: RenderProps<appQuery>) {
  if (error) {
    return <div><button onClick={() => retry()}>{error.message}</button></div>;
  }
  if (props) {
    return (
      <AppContainer>
        <Home root={props as home_root$key} />
      </AppContainer>
    );
  }

  return <Loader type={LoaderType.Ring} />;
}

function App() {
  const renderProps = useQuery<appQuery>(query, variables);

  return <ThemeProvider theme={BaseTheme}>{render(renderProps)}</ThemeProvider>;
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
