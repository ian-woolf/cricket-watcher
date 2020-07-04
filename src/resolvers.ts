export const resolvers = {
    Query: {
      matches(){
      return [{id: 1, homeTeam: 10, awayTeam: 11},{id: 2, homeTeam: 11, awayTeam: 10}];
      }
    },
  };

module.exports = resolvers;