const {readJSONFile, writeJSONFile} = require('./helpers');
const {createRandomMessage, createMultipleMessages} = require("./messages");

const run = () =>{
    let messages = readJSONFile("./data", "messages.json")
    if(process.argv[3]){
        messages.push(...createMultipleMessages(process.argv[3]))
    }else{
        messages.push(createRandomMessage());
    }
    writeJSONFile("./data","messages.json",messages)
}

run();