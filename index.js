const { randomHeroGen, createRandomHero } = require('./heroBuilder')
const { writeJSONFile, readJSONFile } = require('./helpers')

const run = () => {
    let heroes = readJSONFile("./data", "heroes.json")
    if (process.argv[3]){
        heroes.push(...randomHeroGen(process.argv[3]))
    } else {
        heroes.push(createRandomHero())
    }
    writeJSONFile('./data', 'heroes.json', heroes)
}

run()