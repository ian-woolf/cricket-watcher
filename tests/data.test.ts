import { matchesData, teamsData } from '../src/data';

describe('data', () => {

    test('matches data', () => {
        expect(matchesData).toBeInstanceOf(Array);
        matchesData.forEach(match => {
            expect(match.body.match.id).toBeGreaterThan(0);
            expect(match.body.match.cmsMatchType).toBeTruthy();
            expect(match.body.match.localStartDate).toBeTruthy();
            expect(match.body.match.venue.name).toBeTruthy();
            expect(match.body.match.matchSummaryText).toBeTruthy();
            expect(match.body.match.homeTeam.name).toBeTruthy();
            expect(match.body.match.awayTeam.name).toBeTruthy();
        })
    })

    test('teams data', () => {
        expect(teamsData).toBeInstanceOf(Array);
        teamsData.forEach(team => {
            expect(team.id).toBeGreaterThan(0);
            expect(team.name).toBeTruthy();
        })
    })
})