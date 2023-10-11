const { generateRandomMaterials } = require ("../materials");


describe(generateRandomMaterials, () => {
    test("Has material property", () => {
        const actual = generateRandomMaterials();
        expect(actual).toHaveProperty("material"); // checks if output has key "material" in object
    });
    test ("Returns Object Type",() => {
        const actual = generateRandomMaterials ();
        expect(typeof actual).toBe("object"); // checks if output is an object
        expect(actual).not.toBeNull(); //must include bc null is considered an object type
    });    
});