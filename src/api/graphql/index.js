import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";

//Apollo client

export const client = new ApolloClient({
	uri: process.env.REACT_APP_API_URI,
	cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    useGETForQueries: true
  }),
	defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
  },
});
