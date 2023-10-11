const { faker } = require('@faker-js/faker');

const createRandomWallet = (_currency = 'USD', amount = 0) => {
    const wallet = {
        _id: faker.datatype.uuid(),
        displayName: `${faker.animal.type()}`,
        currency: _currency,
        balance: amount
    };
    return wallet;
}

const generateMultipleWallets = (num, _currency = 'USD', amount = 0.1) => {
    const wallets = [];
    for (let i = 0; i < num; i++) {
        wallets.push(createRandomWallet(_currency, amount));
    }
    return wallets;
}

function depositMoney(id, currency, amount) {
    const wallet = wallets.find((block) => block._id == id);
    if (wallet) {
        if (currency == 'USD') {
            wallet.amount += amount;
        }
        // else if (currency == 'GBP') {

        // }
    }
    return wallet ? wallet : null;
}

module.exports = { createRandomWallet, generateMultipleWallets, depositMoney };