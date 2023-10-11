const { randomSynopsisFactory } = require("../fakerData.js");

describe("randomSynopsisFactory()", () =>{
    it("should return a *ONE* object", () => {
        const input = 1
        const actual = randomSynopsisFactory(input)
        const expected = 1
        expect(actual.length).toEqual(expected)
    })
    it("should return more than one object", () => {
        const input = 5
        const actual = randomSynopsisFactory(input)
        const expected = (actual.length) > 1
        expect(expected).toEqual(true)
    })
});