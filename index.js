const { createRandomUserMessage, randomUserMessageFactory } = require("./users");
const { writeJSONFile, readJSONFile } = require('./transmutation'); 

const run = () => {
    let forumPost = readJSONFile('./data', 'users.json')
    if (process.argv[3]) {
        forumPost.push(...randomUserMessageFactory(process.argv[3]))
      } else {
        forumPost.push(createRandomUserMessage())
      }
      writeJSONFile('./data', 'users.json', forumPost)
} 

run(); 