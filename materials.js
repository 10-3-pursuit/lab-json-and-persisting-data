const { faker } = require("@faker-js/faker");

const generateRandomMaterials = (num) => {
    if (typeof num !== "number") return undefined;
        let output = [];
        for (let i = 0; i < num; i++) {
            const material = {
                material: faker.commerce.productMaterial(), // generates string
            };
            output.push(material.material);
        }
        return output.join(", ");        
}

console.log(generateRandomMaterials (2));

module.exports = { generateRandomMaterials };