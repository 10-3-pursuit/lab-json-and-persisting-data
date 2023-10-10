const  {faker}  = require ("@faker-js/faker");

//generates latin messages
const createRandomMessage = () => {
    const product = {
      _id: faker.datatype.uuid(),
      Username: faker.name.fullName(),
      post: faker.lorem.sentences(),
      postedToday: faker.datatype.boolean(),
      Upvotes:faker.datatype.number(100000),
    };
    return product;
  }
//   console.log(createRandomProduct());


const randomMessageFactory = (num) => {
    const products = [];
    for (let i = 0; i < num; i++) {
      products.push(createRandomMessage());
    }
    return products;
}

module.exports = {
    createRandomMessage,
    randomMessageFactory
}