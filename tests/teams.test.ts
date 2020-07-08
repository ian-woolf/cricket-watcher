const { UserInputError } = require('apollo-server-lambda');
import { teams, team } from '../src/teams';

describe('teams', () => {

    // TODO: I'd like to check that Team is being exported, and is an interface
    // but my understanding is that my tests are running against the pure javascript
    // emmitted by ts-jest, and interfaces are stripped out

    describe('teams resolver', () => {

        test('should return an array of teams objects', () => {
            const resolvedTeams = teams();
            expect(resolvedTeams).toBeInstanceOf(Array);
            resolvedTeams.forEach(team => {
                expect(team.id).toBeGreaterThan(0);
                expect(team.name).toBeTruthy();
            })
        })

    })

    describe('team resolver', () => {

        test('should return a team object when given a valid id', () => {
            const resolvedTeam = team({}, { id: 4 });
            expect(resolvedTeam).toBeInstanceOf(Object);
            expect(resolvedTeam.name).toEqual('New Zealand Men');
        })

        test('should throw a UserInputError when given an invalid id', () => {
            expect(() => { team({}, { id: 99999 }) }).toThrowError(UserInputError);
        })

    })
})