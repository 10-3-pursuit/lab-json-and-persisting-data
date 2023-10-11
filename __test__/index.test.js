const createRandomAnimalData = require('../index')
const animalsData =  require('../data/animals.json')
const {randomAnimalFactory, createRandomAnimal} = require('./animals')
const {writeJSONFile, readJSONFile} = require('./helpers')



describe("Zoo Animals", ()=>{
  describe('createRandomAnimalData()', ()=>{
    it('should return an array of animal objects', ()=>{
      const actual = createRandomAnimalData()
      const expected = 
      expect(actual).toEqual(expected)
    })
  })
})