const {faker} = require("@faker-js/faker");

const createRandomMessage = () =>{
    const message = {
        id: faker.datatype.uuid(),
        username: `${faker.hacker.adjective()} ${faker.science.chemicalElement().name} ${faker.animal.cat()}`,
        messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,
        messageContent: faker.lorem.paragraph(),
        isResolved: faker.datatype.boolean(),
        messageResponse: `${faker.hacker.phrase()} -date:${faker.date.future()}`,
        numberOfUpvotes: faker.datatype.number()
    };
    return message;
};

const createMultipleMessages = (num) =>{
    const messages = []
    for(let i = 0; i < num; i++){
        messages.push(createRandomMessage());
    };
    return messages;
};

module.exports = {
    createRandomMessage,
    createMultipleMessages
};