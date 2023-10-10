const { generateRandomMaterial } = require ("../materials");

describe(generateRandomMaterial, () => {
    test("input is a number data type", () => {
        const input = 2; // number type
        const actual = generateRandomMaterial(input);

        // Assert that actual result is a string
        expect(typeof actual).toBe("string");

        // Assert that actual result is not empty
        expect(actual.length).toBeGreaterThan(0);
    });
    test ("generates correct number of items",() => {});
    test ("returns undefined if argument is incorrect data type",() => {});
});