const { UserInputError } = require('apollo-server-lambda');
import { matchesData } from './data';

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
function reduceMatch(match: {info: { match_type, match_type_number, dates, venue, teams, outcome }}): Match {
    return {
      id: match.info.match_type_number,
      type: match.info.match_type,
      date: match.info.dates[0],
      venue: match.info.venue,
      teams: match.info.teams, 
      summary: `${match.info.outcome.winner} won` // TODO improve
    }
}

export function matches() {
  return matchesData.map((match) => reduceMatch(match));
}