const { faker } = require('@faker-js/faker');
const { blocks } = require('./data/blocks')

const createRandomWallet = (_currency, amount) => {
    const product = {
        _id: faker.datatype.uuid(),
        displayName: `${faker.person.firstName}`,
        balance: amount,
        currency: _currency,
    };
    return product;
}

function depositMoney(_id, amount) {
    const wallet = null;
    return wallet;
}

module.exports = { createRandomWallet,  };