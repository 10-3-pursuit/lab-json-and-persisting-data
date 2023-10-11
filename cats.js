const { faker } = require("@faker-js/faker");

function createRandomCat() {
  const cat = {
    _id: faker.datatype.uuid(),
    breed: faker.animal.cat(),
    description: faker.animal.cat(),
    price: faker.commerce.price(10, 200, 2, "$"),
    currency: "USD",
    inStock: faker.datatype.boolean(),
  };
  return cat;
}

//console.log(createRandomCat());

function randomCatMade(number) {
  const cats = [];
  for (let i = 0; i < number; i++) {
    cats.push(createRandomCat());
  }
  return cats;
}
//console.log(randomCatMade(2))

module.exports = {
    createRandomCat,
    randomCatMade
}