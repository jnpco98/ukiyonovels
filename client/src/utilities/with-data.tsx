import React from "react";
import { KeysOfString } from '@utilities/types';
import initEnvironment from "@utilities/relay-environment";
import { NextPageContext } from "next";
import { fetchQuery, ReactRelayContext } from 'react-relay';

export default function withData(ComposedComponent: React.FunctionComponent<any> & { getInitialProps?: (ctx: NextPageContext) => Promise<KeysOfString<any>> }, options: KeysOfString<any> = {}) {
  function WithData(props: { queryRecords: string }) {
    const environment = initEnvironment({ records: props.queryRecords });
    const context = { environment, variables: {} } as any;

    return(
      <ReactRelayContext.Provider value={context}>
        <ComposedComponent {...props}/>
      </ReactRelayContext.Provider>
    );
  }
  
  WithData.displayName = `WithData(${ComposedComponent.displayName})`;

  WithData.getInitialProps = async function(ctx: NextPageContext) {
    const composedInitialProps = ComposedComponent.getInitialProps ? await ComposedComponent.getInitialProps(ctx) : {};

    let queryProps = {};
    let queryRecords = {};
    const environment = initEnvironment();

    // Attaching HOC
    if (options.query) {
      const variables = {}
      queryProps = await fetchQuery(environment, options.query, variables)
      queryRecords = environment.getStore().getSource().toJSON()
    }

    return {
      ...composedInitialProps,
      ...queryProps,
      queryRecords,
    }
  }

  return WithData;
}