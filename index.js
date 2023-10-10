const {randomPersonGenerator, randomPeopleList} = require('./persons')
const {writeJSONFile, readJSONFile} = require("./helpers")

const run = () => {
    let people = readJSONFile('./data', 'persons.json')
    if (process.argv[3]){
        people.push(...randomPeopleList(process.argv[3]))
    } else {
        people.push(randomPersonGenerator())
    }
    writeJSONFile('./data', 'persons.json', people)
}
run()