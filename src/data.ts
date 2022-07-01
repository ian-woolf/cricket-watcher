export const matchesData = [
    require('../data/matches/1144487.json'),
    require('../data/matches/1144491.json'),
    require('../data/matches/1144497.json'),
    require('../data/matches/1144502.json'),
    require('../data/matches/1144507.json'),
    require('../data/matches/1144515.json')
  ]

export interface WicketData {
  kind: string,
  player_out: string,
  fielders: {name: string}[]
}

export interface DeliveryData {
  batter: string,
  bowler: string,
  non_striker: string,
  runs: {
    batter: number,
    extras: number,
    total: number
  },
  wickets: WicketData[]
}

  export interface OverData {
    over: number, // which over of the innings (0-indexed)
    deliveries: DeliveryData[]
  }

  export interface PowerplayData {
    from: string,
    to: string,
    type: string
  }

  export interface InningsData {
    team: string,
    overs: OverData[],
    powerplays: PowerplayData[]
  }

  export interface MatchData {
    meta: {
      data_version: string,
      created: string,
      revision: number
    },
    info: {
      balls_per_over: number,
      city: string,
      dates: string[],
      event: {
        name: string,
        match_number: number
      },
      gender: string,
      match_type: string,
      match_type_number: number,
      officials: {
        match_referees: string[],
        reserve_umpires: string[],
        tv_umpires: string[],
        umpires: string[]
      },
      outcome: {
        winner: string,
        by: {
          runs?: number,
          wickets?: number
        }
      },
      overs: number,
      player_of_match: string[],
      players: any,
      registry: any,
      season: string,
      team_type: string,
      teams: string[],
      toss: {
        decision: string,
        winner: string
      },
      venue: string,
    }
    innings: InningsData[]
  }
