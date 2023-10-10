const { randomHacker, randomHackerFactory } = require("../hackers.js");
const { faker } = require("@faker-js/faker");

describe("Hackers", () => {

    describe("randomHacker()", () => {
        it("should return one hacker obj", () => {
            const actual = randomHacker();
            const expected = { 
                _id: faker.datatype.uuid(),
                name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
                inJail: faker.datatype.boolean(),
                popularityLvl: faker.commerce.price(0, 100, 0)
            }
            expect(actual.length).toEqual(expected.length);
        })
    })
    
    describe("randomHackerFactory()", () => {
        it("should return specified number of hackers", () => {

            const input = 2
            const actual = randomHackerFactory(input);
            const expected = [{ 
                _id: faker.datatype.uuid(),
                name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
                inJail: faker.datatype.boolean(),
                popularityLvl: faker.commerce.price(0, 100, 0)
            },
            { 
                _id: faker.datatype.uuid(),
                name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
                inJail: faker.datatype.boolean(),
                popularityLvl: faker.commerce.price(0, 100, 0)
            }]
            
            expect(actual.length).toEqual(expected.length);
        })
    })
})