const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./schema');

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/dev/graphql"
  }
});

exports.handler = server.createHandler();