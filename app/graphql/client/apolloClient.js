import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const query = (query, variables = {}) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjamV5OW5kbmIwMDBnMDkyOGdleGh2d2hvIiwiaWF0IjoxNTIyNzgwMTIxfQ.Pm9wZs7vC7DgxvcpbmG_z4JelbluFK0mIvrCR-V72So';

  return client.query({
    query,
    variables,
    context: {
      headers: {
        authorization: token,
      },
    },
  });
};

export const mutate = (mutation, variables = {}) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjamV5OW5kbmIwMDBnMDkyOGdleGh2d2hvIiwiaWF0IjoxNTIyNzgwMTIxfQ.Pm9wZs7vC7DgxvcpbmG_z4JelbluFK0mIvrCR-V72So';

  return client.mutate({
    mutation,
    variables,
    context: {
      headers: {
        authorization: token,
      },
    },
  });
};
