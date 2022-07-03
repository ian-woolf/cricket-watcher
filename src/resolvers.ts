import { matches } from './matches';
import { innings } from './innings';

export const resolvers = {
    Query: {
      matches,
      innings,
    },
  };

module.exports = resolvers;