import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Observable } from 'rxjs/Observable';
import store from 'store';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const query = (query, variables = {}) => {
  const token = store.get('token');

  const queryObject = {
    query,
    variables,
  };

  if (token) {
    queryObject.context = {
      headers: {
        authorization: token,
      },
    };
  }

  return Observable.fromPromise(client.query(queryObject));
};

export const mutate = (mutation, variables = {}) => {
  const token = store.get('token');

  const mutateObject = {
    mutation,
    variables,
  };

  if (token) {
    mutateObject.context = {
      headers: {
        authorization: token,
      },
    };
  }

  return Observable.fromPromise(client.mutate(mutateObject));
};
