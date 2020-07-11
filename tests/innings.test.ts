import { innings } from '../src/innings';

describe('innings', () => {

    // TODO: I'd like to check that Innings is being exported, and is an interface
    // but my understanding is that my tests are running against the pure javascript
    // emmitted by ts-jest, and interfaces are stripped out

    describe('innings resolver', () => {

        test('should return an array of innings objects', () => {
            const resolvedInnings = innings();
            expect(resolvedInnings).toBeInstanceOf(Array);
            resolvedInnings.forEach(innings => {
                expect(innings.team.id).toBeGreaterThan(0);
                expect(typeof innings.team.name).toBe('string')
                expect(innings.runs).toBeGreaterThan(0);
                expect(innings.wickets).toBeGreaterThan(0);
                expect(innings.overs).toBeGreaterThan(0);
            })
        })

        test('should return acceptable overs property', () => {
            // an over is made up of 6 (legal) balls
            // in general, the current length of an innings is represented by:
            // <number of completed overs>.<number of balls bowled in the current over>
            // e.g. 0.1 (after the first ball of the match)
            //      4.4, 12.2, 49.5
            // once the sixth ball has been bowled, the over is complete
            // so one ball after 0.5 is 1.0 (or just 1)
            // one ball after 19.9 is 20.0 (or just 20)

            // TL;DR if the decimal component of overs is > .5, it's wrong
            const resolvedInnings = innings();
            resolvedInnings.forEach(innings => {
                let decimal = innings.overs - Math.floor(innings.overs);
                expect(decimal).toBeLessThanOrEqual(0.5);
            });
        })

    })

})