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
    test ("generates correct number of items",() => {
        const input = 5; // test for 5 materials
        const actual = generateRandomMaterial(input);
        const actualCount = actual.split(', ').length;

        // Assert that actual number of items generated matches the input number
        expect(actualCount).toBe(input);
    });
    test ("returns undefined if argument is incorrect data type",() => {});
});