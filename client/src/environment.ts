import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import axios from 'axios';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return axios
    .post(
      process.env.REACT_APP_UKIYONOVELS_GQL_ENDPOINT,
      {
        query: operation.text,
        variables
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    .then(data => data.data);
});

export const environment = new Environment({ network, store });
