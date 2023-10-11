const {faker} = require('@faker-js/faker')


const createRandomAnimal = () => {
  const animal = {
    animalId: faker.datatype.uuid(),
    name: `${faker.word.adjective()} ${faker.animal.type()}`,
    description: faker.lorem.lines(2),
    numberOfAnimals: faker.commerce.price(5, 50, 0),
    pettable: faker.datatype.boolean(),
    attributes: {
      color: faker.color.human(),
      fur: faker.datatype.boolean()
    }
  }
  return animal
}


const randomAnimalFactory = num => {
  const animals = []
  for(let i = 0; i < num; i++) {
    animals.push(createRandomAnimal())
  }
  return animals
}



module.exports = {
  createRandomAnimal, 
  randomAnimalFactory
}