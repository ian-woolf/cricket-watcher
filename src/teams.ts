const { teamsData } = require('./data');
const { UserInputError } = require('apollo-server-lambda');

// TODO: this is exactly the same as the graphQL schema
// any way to share a source of truth?

export interface Team {
  id: number,
  name: string
}

export function teams() {
    return teamsData;
}

export function team(_, {id}) {
    const team = teamsData.find(el => (el.id == id));
    if (team) {
      return team;
    }
    else {
      throw new UserInputError(
        `No team found with id ${id}.`
      );
    }
}