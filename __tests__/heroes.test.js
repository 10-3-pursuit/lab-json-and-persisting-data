const { randomHeroGen } = require('../heroBuilder')
const { writeJSONFile, readJSONFile } = require('../helpers')

describe("Heroes", () => {
    describe("randomHeroGen", ()=> {
        it("should generate a single hero", () => {
            const input = 1
            const actual = randomHeroGen(input)
            const expected = 1
            expect(actual.length).toEqual(expected)
        })
    })
    describe("randomHeroGen", ()=> {
        it("should generate multiple heroes", () => {
            const input = 2
            const actual = randomHeroGen(input)
            const expected = 2
            expect(actual.length).toEqual(expected)
        })
    })
})