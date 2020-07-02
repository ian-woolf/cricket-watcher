const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    matches: [Match]!
  }

  type Match {
    id: ID!,
    homeTeam: ID!,
    awayTeam: ID!
  }
`;


module.exports = typeDefs;