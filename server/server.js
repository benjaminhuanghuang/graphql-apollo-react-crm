import express from 'express';
import cors from 'cors';
const PORT = 4000;
const app = express();

app.use('*', cors({ origin: 'http://localhost:3000' }));

// Apply Apollo server
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/types';
import { resolvers } from './graphql/resolvers';
//MakeExecutableSchema has been replaced with the ApolloServer constructor function
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app }); // apply Apollo server to express server

app.listen(PORT, () =>
  console.log(`Your GraphQL server is running on port ${PORT}`)
);
