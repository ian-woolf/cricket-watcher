import { Team } from './teams';
import { InningsData, OverData } from './data';

export interface Innings {
  team: string,
  inningsNumber: number, // which match innings it was. 1 or 2 for limited overs, 1-4 for red ball
  runs: number,
  wickets: number,
  overs: number
}

function runsInOver(over: OverData): number {
  return over.deliveries.reduce((runs, delivery) => runs + delivery.runs.total, 0)
}

function countRuns(overs: OverData[]): number {
  return overs.reduce((runs, over) => runs + runsInOver(over), 0)
}

function wicketsInOver(over: OverData): number {
  return over.deliveries.filter(delivery => !!delivery.wickets).length;
}

function countWickets(overs: OverData[]): number {
  // remember that each over can contain multiple wicket-taking deliveries
 return overs.reduce((wickets, over) => wickets + wicketsInOver(over), 0);
}

function countOvers(overs: OverData[], ballsPerOver: number): number {
  const arrayLength = overs.length;
  // its possible that the last over wasn't a full over
  // need to check if it had the full number of deliveries in it
  const deliveriesInlastOver = overs[overs.length-1].deliveries.length;
  if(deliveriesInlastOver < ballsPerOver) {
    return arrayLength - 1 + (deliveriesInlastOver / 10)
  }
  return arrayLength;
}

export function reduceInnings(innings: InningsData, inningsNumber: number, ballsPerOver: number): Innings {
  return {
    team: innings.team,
    inningsNumber,
    overs: countOvers(innings.overs, ballsPerOver),
    runs: countRuns(innings.overs),
    wickets: countWickets(innings.overs)
  }
}
