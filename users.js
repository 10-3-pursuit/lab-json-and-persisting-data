const { faker } = require("@faker-js/faker");

const createRandomUserMessage = () => {
    // found useful 2-liner to capitalize first letter of string, here is link to code: https://ui.dev/capitalize-first-letter-of-string-javascript
    const capitalize = ([firstLetter, ...restOfWord]) =>
    firstLetter.toUpperCase() + restOfWord.join("");
    //initialize a variable that will house the user object data
    const hackerForumPost = {
        // - `id`: A unique id
        id: faker.datatype.uuid(),
        // - `hackerName`: faker `adjective` + `chemicalElement` + `animal` ( e.g.Hyper Hydrogen Hyena)
        hackerName: `${capitalize(faker.word.adjective())} ${faker.science.chemicalElement().name} ${capitalize(faker.animal.type())}`,
        // - `messageTitle`: Help with `hacker.adjective` + `hacker.abbreviation` on `git.branch`.
        messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,
        // - `messageContent`: `lorem.paragraph`
        messageContent: faker.lorem.paragraph(),
        // - `isResolved`: A boolean for whether or not the issue is resolved.
        isResolved: faker.datatype.boolean(),
        // - `messageResponse` : `hacker.phrase`
        messageResponse: faker.hacker.phrase(),
        // - date`:` the message was posted.
        date: faker.date.past(),
        // - `numberOfUpvotes`: the number of upvotes
        numberOfUpvotes: faker.datatype.number({ max: 99999 })
    }
    //return user object w/ data we want
    return hackerForumPost 
}

function randomUserMessageFactory(number) {
    const hackerForumPost = [];
    for (let i = 0; i < number; i++) {
        hackerForumPost.push(createRandomUserMessage());
    } 
    return hackerForumPost;
  }

module.exports = { createRandomUserMessage, randomUserMessageFactory }; 