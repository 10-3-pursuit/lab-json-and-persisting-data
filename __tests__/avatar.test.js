const { generateGameAvatar } = require('./src/avatar.js');

describe("Avatar", () => {
describe("generateGameAvatar", () => {
    it("should return each value as a string", () => {
        const avatar = generateGameAvatar();
            
        expect(typeof avatar.__id).toBe('string');
        expect(typeof avatar.username).toBe('string');
        expect(typeof avatar.photo).toBe('string');
        });
    });
});


