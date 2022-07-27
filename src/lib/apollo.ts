import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl5zg4wh631si01t79nsk7qey/master',
  cache: new InMemoryCache()
})