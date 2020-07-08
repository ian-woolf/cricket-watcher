const { UserInputError } = require('apollo-server-lambda');
import { matches, match } from '../src/matches';

describe('matches', () => {

    // TODO: I'd like to check that an Match is being exported, and is an interface
    // but my understanding is that my tests are running against the pure javascript
    // emmitted by ts-jest, and interfaces are stripped out

    describe('matches resolver', () => {

        test('should return an array of match objects', () => {
            const resolvedMatches = matches();
            expect(resolvedMatches).toBeInstanceOf(Array);
            resolvedMatches.forEach(match => {
                expect(match.id).toBeGreaterThan(0);
                expect(match.summary).toBeTruthy();
            })
        })

    })

    describe('match resolver', () => {

        test('should return a match object when given a valid id', () => {
            const resolvedMatch = match({}, { id: 43648 });
            expect(resolvedMatch).toBeInstanceOf(Object);
            expect(resolvedMatch.summary).toEqual('Bangladesh win by 21 runs');
        })

        test('should throw a UserInputError when given an invalid id', () => {
            // suppress the console.log that this generates for the sake of tidy test output
            jest.spyOn(console, 'log').mockImplementation(() => {});
            expect(() => { match({}, { id: 99999 }) }).toThrowError(UserInputError);
        })

    })
})