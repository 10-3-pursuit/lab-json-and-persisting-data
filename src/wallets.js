const { faker } = require('@faker-js/faker');
const { readJSONFile, writeJSONFile } = require('../helpers');
const wallets = readJSONFile('./data', 'wallets.json');

const createRandomWallet = (_currency = 'USD', amount = 0) => {
    const wallet = {
        _id: faker.datatype.uuid(),
        displayName: `${faker.animal.type()}`,
        currency: _currency,
        balance: amount
    };
    return wallet;
}

function depositMoney(id, currency, amount) {
    const wallet = wallets.find((w) => {
        if (w._id == id) {
            w.balance = Number(w.balance) + Number(amount);
            // if (currency == 'USD') {
                
            // }
            // else if (currency == 'GBP') {
            
            // }
            return w;
        }
    });
    console.log(wallet);
    return wallet ? wallet : null;
}

// depositMoney('09bac105-22d6-4707-9098-e02ebb972128', 'USD', 100);
        
const generateMultipleWallets = (num, _currency = 'USD', amount = 0.1) => {
    const wallets = [];
    for (let i = 0; i < num; i++) {
        wallets.push(createRandomWallet(_currency, amount));
    }
    return wallets;
}

module.exports = { createRandomWallet, generateMultipleWallets, depositMoney };