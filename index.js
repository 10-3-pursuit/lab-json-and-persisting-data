const { randomMessageFactory, createRandomMessage } = require('./messages')
const { writeJSONFile, readJSONFile } = require('./helpers')

const run = () => {
    let messages = readJSONFile('./data', 'messages.json')
    if(process.argv[3]){
        messages.push(...randomProductFactory(process.argv[3]))
    } else {
        messages.push(createRandomMessage())
    }
    writeJSONFile("./data", "messages.json", messages)
}
run()