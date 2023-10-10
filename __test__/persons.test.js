const {randomPersonGenerator, randomPeopleList} = require("../persons")

describe("randomPeopleList()", () => {
    it("should return single object", () => {
        const input = 1
        const actual = randomPeopleList(input)
        const expected = 1
        expect(actual.length).toEqual(expected)
    })
    it("should return multiple objects", () => {
        const input = 4
        const actual = randomPeopleList(input)
        const expected = (actual.length) > 1
        expect(expected).toEqual(true)
    })
})
describe("randomPersonGenerator()", () => {
    it("should return object with correct properties", () => {
        const person = randomPersonGenerator()
        expect(person).toHaveProperty('name')
        expect(person).toHaveProperty('age')
        expect(person).toHaveProperty('phone')
        expect(person).toHaveProperty('state')
        expect(person).toHaveProperty('alive')
    })
})