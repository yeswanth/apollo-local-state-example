import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
cache.writeData({
  data: {
    quantity: 0
  }
});

const httpLink = createHttpLink({
  uri: "http://abc.in/graphql",
  credentials: "same-origin"
});

const client = new ApolloClient({
  link: httpLink,
  credentials: "same-origin",
  cache,
  resolvers: {},
});

export default client;
