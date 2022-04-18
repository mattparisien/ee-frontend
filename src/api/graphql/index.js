import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Apollo client

export const client = new ApolloClient({
	uri: process.env.REACT_APP_API_URI,
	cache: new InMemoryCache(),
	defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
  },
});
