const { createRandomUserMessage, randomUserMessageFactory } = require("../users");
// const users = require("../data/users");

describe("createRandomUserMessage()", () => {
    it('should return the correct UserMessage object for an existing id', () => {
        const input = createRandomUserMessage(); 
        expect(input).toHaveProperty("id");
        expect(input).toHaveProperty("hackerName");
        expect(input).toHaveProperty("messageTitle");
        expect(input).toHaveProperty("messageContent");
        expect(input).toHaveProperty("isResolved");
        expect(input).toHaveProperty("messageResponse");
        expect(input).toHaveProperty("date");
        expect(input).toHaveProperty("numberOfUpvotes");
    });
    it("should return an array of objects that isn't empty", () => {
        const input = 1;
        const actual = randomUserMessageFactory(input); 
        const expected = (actual.length) > 0; 
        expect(expected).toEqual(true); 
      }); 
});



