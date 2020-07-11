import { teams, team } from './teams';
import { matches, match } from './matches';
import { innings } from './innings';

export const resolvers = {
    Query: {
      matches,
      match,
      teams,
      team,
      innings
    },
  };

module.exports = resolvers;