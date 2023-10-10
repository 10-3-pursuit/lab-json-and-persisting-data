const {createMultipleMessages, createRandomMessage} = require('../messages');
const {faker} = require("@faker-js/faker")

describe("Messages",() =>{
    describe("createRandomMessage()",() =>{
        it("should create one random message object",() =>{
            const actual = createRandomMessage()
            const expected = {
                id: faker.datatype.uuid(),
                username: `${faker.hacker.adjective()} ${faker.science.chemicalElement().name} ${faker.animal.cat()}`,
                messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,
                messageContent: faker.lorem.paragraph(),
                isResolved: faker.datatype.boolean(),
                messageResponse: `${faker.hacker.phrase()} -date:${faker.date.future()}`,
                numberOfUpvotes: faker.datatype.number()
            };
            expect(actual.length).toEqual(expected.length);
        });
    });

    describe("createMultipleMessages()",() =>{
        it("should create multiple random message objects",() =>{
            const input = 2;
            const actual = Array.isArray(createMultipleMessages(input));
            const expected = true;
            expect(actual).toEqual(expected);
        });

        it("should create the correct number of random message objects",() =>{
            const input = 4;
            const actual = createMultipleMessages(input).length;
            const expected = 4;
            expect(actual).toEqual(expected);
        });

        it("should return an empty array if no number is given",()=>{
            const actual = createMultipleMessages();
            const expected = [];
            expect(actual).toEqual(expected);
        });
    });
});