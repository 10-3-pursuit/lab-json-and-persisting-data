const { faker } = require('@faker-js/faker') 
// console.log(faker)

const createRandomMessage = () => {
    const message = {
        userId: faker.datatype.uuid(),
        hackerName: `${faker.commerce.productAdjective()}${faker.science.chemicalElement().name}${faker.commerce.product()}`,
        messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,
        messageContent: faker.lorem.paragraph(),
        isResolved: faker.datatype.boolean(),
        messageResponse: `${faker.hacker.phrase()}`,
        dateofResponse: `${faker.date.recent()}`,
        numberOfUpvotes: faker.datatype.number(30),
    }
    return message
}
console.log(createRandomMessage())

const randomMessageFactory = (num) => {
    const messages = []
    for(let i = 0; i < num; i++){
        messages.push(createRandomMessage())
    }
    return messages
}

module.exports = {
    createRandomMessage,
    randomMessageFactory,
}
