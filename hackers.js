const { faker } = require("@faker-js/faker");

const randomHacker = () => {
    const hacker = {
        _id: faker.datatype.uuid(),
        name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
        inJail: faker.datatype.boolean(),
        popularityLvl: faker.commerce.price(0, 100, 0)
    }
    return hacker;
}

// console.log(randomHacker());

const randomHackerFactory = (num) => {
    const hackers = [];

    for (let i = 0; i < num; i++) {
        hackers.push(randomHacker());
    }
    return hackers
}

// console.log(randomHackerFactory(2))

module.exports = {
    randomHacker,
    randomHackerFactory
}