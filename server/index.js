import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";

import './database';

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
});

server.start(() => console.log('server is running'));