const { gql } = require('apollo-server-lambda');

export const typeDefs = gql`
  type Query {
    matches(type: String, venue: String, team: String): [Match]!
  }

  type Match {
    id: ID!,
    type: String!,
    date: String!
    venue: String!,
    teams: [String]!,
    summary: String!,
    innings: [Innings]!
  }

  type Innings {
    team: String!,
    inningsNumber: Int!,
    runs: Int!,
    wickets: Int!,
    overs: Float!
  }

`;

module.exports = typeDefs;