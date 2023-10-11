const { faker } = require("@faker-js/faker");

/**
 * Generates a comma-separated string of random materials.
 * @function
 * @param {number} num - The number of random materials to generate.
 * @returns {string|undefined} A comma-separated formatted string of random materials, or undefined if the provided argument is not a number.
 * @example Input: 4 Output: "Frozen, Plastic, Metal, Fresh"
 */


const generateRandomMaterials = () => {
    const material = {
        material: faker.commerce.productMaterial(), // generates string
    };
    return material;
}
// export 
module.exports = { generateRandomMaterials };

// works