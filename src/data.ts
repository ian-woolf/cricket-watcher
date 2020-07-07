export const matches = [
    require('../data/matches/2181_43648.json'),
    require('../data/matches/2181_43652.json'),
    require('../data/matches/2181_43658.json'),
    require('../data/matches/2181_43664.json'),
    require('../data/matches/2181_43668.json'),
    require('../data/matches/2181_43676.json')
  ]

let teamsMap = new Map();
matches.forEach(match => {
  let matchObj = match.body.match;
  teamsMap.set(matchObj.homeTeam.id, { id: matchObj.homeTeam.id, name: matchObj.homeTeam.name });
  teamsMap.set(matchObj.awayTeam.id, { id: matchObj.awayTeam.id, name: matchObj.awayTeam.name });
})

export const teamsData = Array.from(teamsMap, ([name, value]) => value);