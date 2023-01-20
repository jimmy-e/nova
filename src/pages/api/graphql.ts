// https://github.com/apollo-server-integrations/apollo-server-integration-next#getting-started
// https://www.apollographql.com/docs/apollo-server/data/fetching-data#adding-data-sources-to-your-context-function
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import typeDefs from './typeDefs';
import resolvers from './resolvers/resolvers'
import { getMockDB } from '@/pages/api/mockDB/mockDB';

const server = new ApolloServer({ resolvers, typeDefs });

export default startServerAndCreateNextHandler(
  server,
  {
    context: async () => ({
      dataSources: {
        mockDB: getMockDB(),
      },
    }),
  },
);
