import { matchesData, scorecardsData } from './data';
import { Team } from './teams';

export interface Innings {
  team: Team,
  runs: number,
  wickets: number,
  overs: number
}

export function reduceInnings(innings): Innings {
  // TODO: do a better job of team
  // scorecard only has the shortname available but the match knows the full one
  return {
    team: {
      id: innings.team.id,
      name: innings.team.shortName
    },
    runs: innings.run,
    wickets: innings.wicket,
    overs: innings.over
  }
}

export function innings() {
  let innings = [];
  scorecardsData.forEach(scorecard => {
    let matchInnings = scorecard.body.fullScorecard.innings.map(innings => reduceInnings(innings));
    innings.push(...matchInnings);
  });

  // by default sort innings by runs, anticipating the most likely query
  innings.sort((a, b) => {
    return b.runs - a.runs;
  })

  return innings;
}