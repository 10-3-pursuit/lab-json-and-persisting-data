const { faker } = require("@faker-js/faker");

const generateRandomMaterial = () => {
    const material = {
        material: faker.commerce.productMaterial(),
    };
    return material;
};

console.log(generateRandomMaterial ());