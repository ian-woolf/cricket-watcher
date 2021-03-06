const { UserInputError } = require('apollo-server-lambda');
import { matchesData, scorecardsData } from './data';
import { Team } from './teams';
import { Innings, reduceInnings } from './innings';

// TODO: this is exactly the same as the graphQL schema
// any way to share a source of truth?
interface Match {
    id: number,
    type: string,
    date: string
    venue: string,
    homeTeam: Team,
    awayTeam: Team,
    summary: string,
    innings: [Innings]
}

// takes match data from the JSON files and returns an object that matches the schema
function reduceMatch(match: {body: { match }}, innings: {body: { fullScorecard }}): Match {
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
      summary: match.body.match.matchSummaryText,
      innings: innings.body.fullScorecard.innings.map(innings => reduceInnings(innings))
    }
}

export function matches() {
  return matchesData.map((match, index) => reduceMatch(match, scorecardsData[index]));
}

export function match(_, {id}) {
  try {
      let matchIndex = matchesData.findIndex(el => (el.body.match.id == id));
    return reduceMatch(
      matchesData[matchIndex],
      scorecardsData[matchIndex]
    );
  }
  catch(err) {
    console.log(err);
    throw new UserInputError(
      `No match found with id ${id}.`
    );
  }
}