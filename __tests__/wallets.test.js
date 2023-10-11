const { depositMoney, createRandomWallet } = require('../src/wallets');
const { readJSONFile, writeJSONFile } = require('../helpers');
const wallets = readJSONFile('./data', 'wallets.json');

describe('Create Random Wallet', () => {
    it('should create a wallet with a 0 balance if no amount is given', () => {
        actual = createRandomWallet();
        expected = {
            _id: null,
            displayName: null,
            currency: 'USD',
            balance: 0
        };
        expect(actual.balance).toEqual(expected.balance);
    })

    it('should create a wallet with $100 if the currency is "USD" and the amount is 100', () => {
        actual = createRandomWallet('USD', 100);
        expected = {
            _id: actual._id,
            displayName: actual.displayName,
            currency: 'USD',
            balance: 100
        };
        expect(actual).toEqual(expected);
    })

    it('should create four key fields when creating a new wallet', () => {
        input = createRandomWallet('USD', 70);
        actual = Object.keys(input);
        expected = ['_id', 'displayName', 'currency', 'balance'];
        expect(actual).toEqual(expected);
    })

    it('should create a number in the balance field when creating a new wallet', () => {
        input = createRandomWallet('USD', 70);
        actual = typeof input.balance;
        expected = 'number'
        expect(actual).toEqual(expected);
    })
});

// describe('Deposit Money', () => {
//     it('should deposit $50 into a specific wallet given an id and an amount of 50 USD.', () => {
//         input = {
//             _id: "92d43649-d0d4-458b-b85a-c9e241b33474",
//             displayName: 'bear',
//             currency: 'USD',
//             balance: 0
//         };
//         actual = depositMoney(input._id, 'USD', 50);
//         expected = {
//             _id: "92d43649-d0d4-458b-b85a-c9e241b33474",
//             displayName: 'bear',
//             currency: 'USD',
//             balance: 50
//         };
//         expect(actual).toEqual(expected);
//     })
// })

// function depositMoney(id, currency, amount) {
//     const wallet = blocks.find((block) => block._id == id);
//     if (wallet) {
//         if (currency == 'USD') {
//             wallet.amount += amount;
//         }
//         // else if (currency == 'GBP') {
            
//             // }
//         }
//         return wallet ? wallet : null;
//     }

// const generateMultipleWallets = (num, _currency = 'USD', amount = 0.1) => {
//     const wallets = [];
//     for (let i = 0; i < num; i++) {
//         wallets.push(createRandomWallet(_currency, amount));
//     }
//     return wallets;
// }