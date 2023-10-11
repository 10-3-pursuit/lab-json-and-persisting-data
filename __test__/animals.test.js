const {createRandomAnimal, randomAnimalFactory} = require('../animals')


describe("Create animal object", ()=>{
  describe('createRandomAnimal()', ()=>{
    it('should return one animal object', ()=>{
      const actual = createRandomAnimal()
      const expected = Object.keys(animal)
      expect(actual).toEqual(expected)
    })
  })
  describe("randomAnimalFactory()", ()=>{
    it("should return one animal object if no arguments are passed", ()=>{
      const input = process.argv[3] === undefined
      const actual = randomAnimalFactory(input)
      const expected = 
      expect(actual).toEqual(expected)
    })
  })
})