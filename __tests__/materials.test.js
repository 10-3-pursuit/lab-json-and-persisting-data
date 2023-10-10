const { generateRandomMaterials } = require ("../materials");

describe(generateRandomMaterials, () => {
    test("input is a number data type", () => {
        const input = 2; // number type
        const actual = generateRandomMaterials(input);

        // Assert that actual result is a string
        expect(typeof actual).toBe("string");

        // Assert that actual result is not empty
        expect(actual.length).toBeGreaterThan(0);
    });
    test ("generates correct number of items",() => {
        const input = 5; // test for 5 materials
        const actual = generateRandomMaterials(input);
        const actualCount = actual.split(', ').length;

        // Assert that actual number of items generated matches the input number
        expect(actualCount).toBe(input);
    });
    test ("returns undefined if argument is incorrect data type",() => {
        const inputString = "3"; // string type
        const actualString = generateRandomMaterials(inputString);

        const inputArray = [2, 3]; // array type
        const actualArray = generateRandomMaterials(inputArray);

        const inputObject = { num: 3 }; // object type
        const actualObject = generateRandomMaterials(inputObject);

        // Assert that result is undefined for each of the incorrect data types
        expect(actualString).toBeUndefined();
        expect(actualArray).toBeUndefined();
        expect(actualObject).toBeUndefined();
    });
});