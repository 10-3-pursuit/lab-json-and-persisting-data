const {writeJSONFile, readJSONFile} = require("./helpers");
const {randomHacker, randomHackerFactory} = require("./hackers");

const run = () => {
    let hackers = readJSONFile("./data", "hackers.json");

    if(process.argv[3]){
        hackers.push(...randomHackerFactory(process.argv[3]));
    } else {
        hackers.push(randomHacker());
    }

    return writeJSONFile("./data", 'hackers.json', hackers);
}

run();