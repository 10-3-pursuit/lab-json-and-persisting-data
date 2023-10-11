const { readJSONFile, writeJSONFile } = require('./helpers');
const { depositMoney, createRandomWallet } = require('./src/wallets')

const run = () => {
    const action = process.argv[2];
    const id = process.argv[3];
    const currency = process.argv[4];
    const amount = process.argv[5];
    let writeToFile = false;

    let wallets = readJSONFile('./data', 'wallets.json');
    const w1 = wallets.find((w) => w._id == "58749d8a-8b3e-4de5-a373-c9f9df1117c7");
    // console.log(w1, '\n-----------------------------');

    if (id) {
        depositMoney(id, currency, amount);
        writeToFile = false;
    } else {
        // call function to create a wallet
        wallets.push(createRandomWallet(currency, amount));
        writeToFile = true;
    }

    if (writeToFile) {
        writeJSONFile('./data', 'wallets.json', wallets);
    }
    // console.log(wallets);
};

run();