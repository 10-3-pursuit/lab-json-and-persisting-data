const { randomMessageFactory, createRandomMessage } = require("../messages")
const faker = require('@faker-js/faker') 

describe("Messages", () => {
    describe('createRandomMessage', () => {
        it("should return/create one message object", () => {
            // const input = 
            const actual = createRandomMessage()
            const expected = {
                userId: expect.any(String),
                hackerName: expect.any(String),
                messageTitle: expect.any(String),
                messageContent: expect.any(String),
                isResolved: expect.any(Boolean),
                messageResponse: expect.any(String),
                dateofResponse: expect.any(String),
                numberOfUpvotes: expect.any(Number),
            }
            expect(actual).toEqual(expected)
        })
    })

    describe('randomMessageFactory', () => {
        it("should create the number of message objects given", () => {
            const input = 3
            const actual = randomMessageFactory(3)
            const expected = [
                {
                userId: expect.any(String),
                hackerName: expect.any(String),
                messageTitle: expect.any(String),
                messageContent: expect.any(String),
                isResolved: expect.any(Boolean),
                messageResponse: expect.any(String),
                dateofResponse: expect.any(String),
                numberOfUpvotes: expect.any(Number),
            },
            {
                userId: expect.any(String),
                hackerName: expect.any(String),
                messageTitle: expect.any(String),
                messageContent: expect.any(String),
                isResolved: expect.any(Boolean),
                messageResponse: expect.any(String),
                dateofResponse: expect.any(String),
                numberOfUpvotes: expect.any(Number),
            },
            {
                userId: expect.any(String),
                hackerName: expect.any(String),
                messageTitle: expect.any(String),
                messageContent: expect.any(String),
                isResolved: expect.any(Boolean),
                messageResponse: expect.any(String),
                dateofResponse: expect.any(String),
                numberOfUpvotes: expect.any(Number),
            }
        ]
            expect(actual).toEqual(expected)
        })
    })

})