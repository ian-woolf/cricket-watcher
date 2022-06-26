import { Team } from './teams';

export interface Innings {
  team: Team,
  runs: number,
  wickets: number,
  overs: number
}
