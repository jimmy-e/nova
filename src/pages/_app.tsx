import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'
import client from '../apolloClient';

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
