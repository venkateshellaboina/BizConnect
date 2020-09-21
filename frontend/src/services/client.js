import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = createHttpLink({
  uri: "https://u7dcvu27fg.execute-api.ap-south-1.amazonaws.com/dev/graphql",
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
