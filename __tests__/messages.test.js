const {createMultipleMessages, createRandomMessage} = require('../messages');

describe("Messages",() =>{
    describe("createRandomMessage()",() =>{
        it("should create one random message object",() =>{
            const actual = Array.isArray(createRandomMessage());
            const expected = false;
            expect(actual).toEqual(expected);
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