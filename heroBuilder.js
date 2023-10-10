const { faker } = require('@faker-js/faker')

const createRandomHero = () => {
    const hero = {
        voughtID: faker.datatype.uuid(),
        name: `${faker.hacker.adjective()} ${faker.name.firstName()}`,
        powerLevelOver9k: faker.datatype.boolean(),
        weakness: faker.science.chemicalElement(),
        peopleSaved: faker.datatype.number({max: 5000000000}),
        digitalWallets: {
            bitcoin: faker.finance.bitcoinAddress(),
            litecoin: faker.finance.litecoinAddress(),
            ethereum: faker.finance.ethereumAddress()
        } 
        // WOULD'VE ADDED A BIO BUT WE ARE USING AN OLD VERSION OF FAKER :D
    }
    return hero
}
const randomHeroGen = (num) => {
    const heroes = []
    for (let i = 0; i < num; i++){
        heroes.push(createRandomHero())
    }
    return heroes
}


module.exports = {
    randomHeroGen,
    createRandomHero
}