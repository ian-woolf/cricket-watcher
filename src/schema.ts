const { gql } = require('apollo-server-lambda');

export const typeDefs = gql`
  type Query {
    matches: [Match]!
  }

  type Match {
    id: ID!,
    type: String!,
    date: String!
    venue: String!,
    teams: [String]!,
    summary: String!,
  }

`;

module.exports = typeDefs;