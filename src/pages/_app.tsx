import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'
import { AppContextProvider } from '@/context/appContext';
import client from '../apolloClient';

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  </ApolloProvider>
);

export default App;
