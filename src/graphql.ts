const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./schema');

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    matches: () => ([{id: 1, homeTeam: 10, awayTeam: 11},{id: 2, homeTeam: 11, awayTeam: 10}])
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/dev/graphql"
  }
});

export const handler = server.createHandler();