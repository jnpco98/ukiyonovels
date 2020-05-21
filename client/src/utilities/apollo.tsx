/**
 * Modified version of https://github.com/borisowsky/next-advanced-starter
 */

import React, { FunctionComponent } from 'react';
import { NextPageContext } from 'next';
import App from 'next/app';
import Head from 'next/head';
import { IncomingMessage } from 'http';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { NormalizedCacheObject, InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import cookie from 'cookie';
import { KeysOfString } from './types';

/** If server-side rendering enabled */
interface InitialWithApolloParams {
  ssr?: boolean;
}

type InitialProps = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  apolloState: any;
} & Record<string, any>;

/**
 * On the client, we store the Apollo client in the following variable.
 * This prevents the client from reinitializing between page transitions.
 */
let globalApolloClient: ApolloClient<NormalizedCacheObject> = null;

/**
 * Get the user token from cookie
 */
function getToken(req?: IncomingMessage) {
  const parsedCookie = cookie.parse(req ? req.headers.cookie ?? '' : document.cookie);

  return parsedCookie.token;
}

function createApolloClient(initialState = {}, ctx: NextPageContext) {
  const fetchOptions = { agent: null } as any;

  const httpLink = new HttpLink({
    uri: process.env.RELAY_ENDPOINT,
    credentials: 'same-origin',
    fetch,
    fetchOptions
  });

  const authLink = setContext((request, { headers }) => {
    const token = getToken(ctx?.req);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

  return new ApolloClient({
    connectToDevTools: Boolean(ctx),
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState)
  });
}

/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerSideProps
 * @param { NextPageContext | AppContext } ctx
 */
export function initOnContext(ctx: NextPageContext & InitialProps) {
  const inAppContext = Boolean(ctx.ctx);

  /**
   * We consider installing `withApollo({ ssr: true })` on global App level
   * as antipattern since it disables project wide Automatic Static Optimization.
   */
  if (process.env.NODE_ENV === 'development') {
    if (inAppContext) {
      console.warn(
        `Warning: You have opted-out of Automatic Static Optimization due to \`withApollo\` in \`pages/_app\`
          Read more: https://err.sh/next.js/opt-out-auto-static-optimization
        `
      );
    }
  }

  /**
   * Initialize ApolloClient if not already done
   */
  const apolloClient =
    ctx.apolloClient || initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);

  /**
   * We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.
   * Otherwise, the component would have to call initApollo() again but this
   * time without the context. Once that happens, the following code will make sure we send
   * the prop as `null` to the browser.
   */
  (apolloClient as any).toJSON = (): null => null;

  /**
   * Add apolloClient to NextPageContext & NextAppContext.
   * This allows us to consume the apolloClient inside our
   * custom `getInitialProps({ apolloClient })`.
   */
  ctx.apolloClient = apolloClient;

  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
function initApolloClient(initialState: NormalizedCacheObject, ctx: NextPageContext) {
  /**
   * Make sure to create a new client for every server-side request so that data
   * isn't shared between connections (which would be bad)
   */
  if (typeof window === 'undefined') {
    return createApolloClient(initialState, ctx);
  }

  /**
   * Reuse client on the client-side
   */
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState, ctx);
  }

  return globalApolloClient;
}

/**
 * Creates a withApollo HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 */
export function withApollo(initialApolloParams: InitialWithApolloParams) {
  const { ssr } = initialApolloParams;

  return function (
    ComposedComponent: FunctionComponent<any> & {
      getInitialProps?: (ctx: NextPageContext) => Promise<KeysOfString<any>>;
    }
  ) {

    function WithApollo(initialProps: InitialProps) {
      const { apolloClient, apolloState, ...pageProps } = initialProps;
      let client: ApolloClient<NormalizedCacheObject>;

      /**
       * if client getDataFromTree & next.js SSR
       * else CSR
       */
      if (apolloClient) client = apolloClient;
      else client = initApolloClient(apolloState, null);

      return (
        <ApolloProvider client={client}>
          <ComposedComponent {...pageProps} />
        </ApolloProvider>
      );
    }

    /**
     * Set display name on development
     */
    if (process.env.NODE_ENV !== 'production') {
      const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';
      WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || ComposedComponent.getInitialProps) {
      WithApollo.getInitialProps = async (ctx: any) => {
        const inAppContext = Boolean(ctx.ctx);
        const { apolloClient } = initOnContext(ctx);

        /**
         * Run wrapped getInitialProps methods
         */
        let pageProps = {};

        if (ComposedComponent.getInitialProps) {
          pageProps = await ComposedComponent.getInitialProps(ctx);
        } else if (inAppContext) {
          pageProps = await App.getInitialProps(ctx);
        }

        /**
         * If on the server:
         */
        if (typeof window === 'undefined') {
          const { AppTree } = ctx;
          /**
           * Stop rendering when response is finished
           */
          if (ctx.res && ctx.res.finished) {
            return pageProps;
          }

          if (ssr && AppTree) {
            try {
              /**
               * Only load react-ssr on server
               */
              const { getDataFromTree } = await import('@apollo/react-ssr');

              /**
               * App components and Page components have different context type
               * Transform accordingly
               */
              let props = {};

              if (inAppContext) props = { ...pageProps, apolloClient };
              else props = { pageProps: { ...pageProps, apolloClient } };

              /**
               * Take the Next.js AppTree, determine which queries are needed to render,
               * and fetch them. This method can be pretty slow since it renders
               * your entire AppTree once for every query.
               *
               * Check out apollo fragments if you want to reduce the number of rerenders.
               * https://www.apollographql.com/docs/react/data/fragments/
               */
              await getDataFromTree(<AppTree {...props} />);
            } catch (error) {
              /**
               * Prevent Apollo Client GraphQL errors from crashing SSR.
               * Handle them in components via the data.error prop:
               *  https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
               */
              console.error('Error while running `getDataFromTree`', error);
            }

            /**
             * Clear head side effect manually
             */
            Head.rewind();
          }
        }

        return {
          ...pageProps,
          apolloState: apolloClient.cache.extract(),
          apolloClient: ctx.apolloClient
        };
      };
    }

    return WithApollo;
  };
}
