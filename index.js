const {randomAnimalFactory, createRandomAnimal} = require('./animals')
const {writeJSONFile, readJSONFile} = require('./helpers')


const createRandomAnimalData = () => {
  let animals = readJSONFile('./data', 'animals.json')
  if(process.argv[3]) {
    animals.push(...randomAnimalFactory(process.argv[3]))
  } else {
    animals.push(createRandomAnimal())
  }
  writeJSONFile('./data', 'animals.json', animals)
}

createRandomAnimalData()

module.exports = {
  run
}