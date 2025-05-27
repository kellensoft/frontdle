import { ApolloClient, InMemoryCache } from '@apollo/client';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
const isDevMode = import.meta.env.VITE_DEV_MODE || 'false';

export const apolloClient = new ApolloClient({
  uri: `${backendUrl}/graphql`,
  cache: new InMemoryCache(),
  connectToDevTools: isDevMode,
});