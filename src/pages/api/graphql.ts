// https://github.com/apollo-server-integrations/apollo-server-integration-next#getting-started
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import typeDefs from './typeDefs';
import resolvers from './resolvers/resolvers'

const server = new ApolloServer({ resolvers, typeDefs });

export default startServerAndCreateNextHandler(server);
