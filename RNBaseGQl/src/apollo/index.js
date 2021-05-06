// @flow
// import ApolloClient, {InMemoryCache} from "apollo-boost";
import api from '../config/api';
import { getDefaultHeaders } from '../api/helper/urlHelper';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // fetchOptions: {
  //   credentials: 'include',
  // },
  // defaultOptions,
  // request: async operation => {
  //   const { operationName: operationname } = operation;
  //   const defaultHeaders = await getDefaultHeaders(operationname);
  //   const headers = {
  //     ...defaultHeaders,
  //     operationname,
  //   };
  //   operation.setContext({ headers });
  // },
  uri: api.baseURL,
});

export default client;
