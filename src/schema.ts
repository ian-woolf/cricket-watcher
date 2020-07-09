const { gql } = require('apollo-server-lambda');

export const typeDefs = gql`
  type Query {
    matches: [Match]!,
    match(id: ID!): Match,
    teams: [Team]!,
    team(id: ID!): Team
  }

  type Match {
    id: ID!,
    type: String!,
    date: String!
    venue: String!,
    homeTeam: Team!,
    awayTeam: Team!,
    summary: String!,
    innings: [Innings]!
  }

  type Team {
    id: ID!,
    name: String!
  }

  type Innings {
    team: Team!,
    runs: Int!,
    wickets: Int!
    overs: Float!
  }
`;

module.exports = typeDefs;