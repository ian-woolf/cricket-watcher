const { UserInputError } = require('apollo-server-lambda');
import { matchesData, MatchData } from './data';

// TODO: this is exactly the same as the graphQL schema
// any way to share a source of truth?
interface Match {
    id: number,
    type: string,
    date: string
    venue: string,
    teams: string[],
    summary: string,
    // innings: Innings[]
}

// takes match data from the JSON files and returns an object that matches the schema
function reduceMatch(match: MatchData): Match {
    return {
      id: match.info.match_type_number,
      type: match.info.match_type,
      date: match.info.dates[0],
      venue: match.info.venue,
      teams: match.info.teams, 
      summary: `${match.info.outcome.winner} won` // TODO improve
    }
}

export function matches(parent, args, context, info) {
  const {type, venue, team} = args;
  const allMatches = matchesData.map((match) => reduceMatch(match));
  let matches = allMatches;
  if(type) {
    matches = matches.filter((match) => match.type === type)
  }
  if(venue) {
    matches = matches.filter((match) => match.venue === venue)
  }
  if(team) {
    matches = matches.filter((match) => match.teams.includes(team))
  }
  return matches;
}