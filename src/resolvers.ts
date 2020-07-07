const { UserInputError } = require('apollo-server-lambda');
const { matches, teams } = require('./data');

// TODO: this is exactly the same as the graphQL schema
// any way to share a source of truth?
interface Match {
  id: number,
  type: string,
  date: string
  venue: string,
  homeTeam: Team,
  awayTeam: Team,
  summary: string
}

interface Team {
  id: number,
  name: string
}

// takes match data from the JSON files and returns an object that matches the schema
function reduceMatch(match: {body: { match }}): Match {
  return {
    id: match.body.match.id,
    type: match.body.match.cmsMatchType,
    date: match.body.match.localStartDate,
    venue: match.body.match.venue.name,
    homeTeam: {
      id: match.body.match.homeTeam.id,
      name: match.body.match.homeTeam.name
    },
    awayTeam: {
      id: match.body.match.awayTeam.id,
      name: match.body.match.awayTeam.name
    },
    summary: match.body.match.matchSummaryText
  }
}

export const resolvers = {
    Query: {
      matches() {
        return matches.map(el => reduceMatch(el));
      },
      match(_, {id}) {
        try {
          return reduceMatch(matches.find(el => (el.body.match.id == id)));
        }
        catch(err) {
          console.log(err);
          throw new UserInputError(
            `No match found with id ${id}.`
          );
        }
      },
      teams() {
        return teams;
      },
      team(_, {id}) {
        const team = teams.find(el => (el.id == id));
        if (team) {
          return team;
        }
        else {
          throw new UserInputError(
            `No team found with id ${id}.`
          );
        }
      }
    },
  };

module.exports = resolvers;