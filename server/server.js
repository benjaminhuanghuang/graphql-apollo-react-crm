import express from 'express';
import cors from 'cors';
const PORT = 4000;
const app = express();

const { ApolloServer, gql } = require('apollo-server-express');
// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

app.use('*', cors({ origin: 'http://localhost:3000' }));

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app
app.listen(PORT, () =>
  console.log(`Your GraphQL server is running on port ${PORT}`)
);
