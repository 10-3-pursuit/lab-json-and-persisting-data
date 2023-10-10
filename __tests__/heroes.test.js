const { randomHeroGen, createRandomHero } = require('../heroBuilder')
const { writeJSONFile, readJSONFile } = require('../helpers')

describe("Heroes", () => {
    describe("Random Hero Gen", ()=> {
        it("should generate a single hero", () => {
            const input = 1
            const actual = randomHeroGen(input)
            const expected = 1
            expect(actual.length).toEqual(expected)
        })
    })
    describe("Create Hero Data Types", () => {
        it("should have correct properties", () => {
            const hero = createRandomHero()
            expect(hero).toHaveProperty('voughtID')
            expect(hero).toHaveProperty('name')
            expect(hero).toHaveProperty('powerLevelOver9k')
            expect(hero).toHaveProperty('weakness')
            expect(hero).toHaveProperty('peopleSaved')
            expect(hero).toHaveProperty('digitalWallets')
        })
    })
})