const {faker} = require("@faker-js/faker")

const randomPersonGenerator = () => {
    const person = {
        name: faker.name.fullName(),
        age: faker.datatype.number(100),
        phone: faker.phone.number('##########'),
        state: faker.address.state(),
        alive: faker.datatype.boolean()
    }
    return person
}

const randomPeopleList = (num) => {
    const people = []

    for (let i = 0; i < num; i++) {
        people.push(randomPersonGenerator())
    }
    return people
}

module.exports = {
    randomPeopleList,
    randomPersonGenerator
}