const { depositMoney, createRandomWallet } = require('../src/wallets');

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
});

// describe('Deposit Money', () => {
    
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