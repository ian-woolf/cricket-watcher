import { teams, team } from './teams';
import { matches, match } from './matches';

export const resolvers = {
    Query: {
      matches,
      match,
      teams,
      team
    },
  };

module.exports = resolvers;