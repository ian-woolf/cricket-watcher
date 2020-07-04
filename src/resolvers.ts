let matches = [
  require('../data/matches/2181_43648.json'),
  require('../data/matches/2181_43652.json'),
  require('../data/matches/2181_43658.json'),
  require('../data/matches/2181_43664.json'),
  require('../data/matches/2181_43668.json'),
  require('../data/matches/2181_43676.json')
]

export const resolvers = {
    Query: {
      matches(){
        return matches.map(el => ({
          id: el.body.match.id,
          type: el.body.match.cmsMatchType,
          date: el.body.match.localStartDate,
          venue: el.body.match.venue.name,
          homeTeam: el.body.match.homeTeam.name,
          awayTeam: el.body.match.awayTeam.name,
          summary: el.body.match.matchSummaryText
        }))
      }
    },
  };

module.exports = resolvers;