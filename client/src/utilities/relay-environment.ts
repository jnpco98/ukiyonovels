import { Environment, Network, RecordSource, Store, RequestParameters, Variables } from 'relay-runtime';

let relayEnvironment: Environment = null;

async function fetchQuery(operation: RequestParameters, variables: Variables) {
  const response = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return await response.json();
}

export default function initEnvironment({ records = {} } = {}) {
  // Create a network layer from the fetch function
  const network = Network.create(fetchQuery)
  const store = new Store(new RecordSource(records))

  // Make sure to create a new Relay environment for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return new Environment({
      network,
      store,
    })
  }

  // Reuse Relay environment on client-side
  if (!relayEnvironment) {
    relayEnvironment = new Environment({
      network,
      store,
    })
  }

  return relayEnvironment;
}