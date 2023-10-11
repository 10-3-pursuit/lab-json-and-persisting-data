const { faker } = require('@faker-js/faker')

const createRandomBook = () => {
    book = {
        isbn: faker.datatype.number(9999999999),
        title: `the ${faker.word.adjective()} ${faker.company.bsNoun()}`.toUpperCase(),
        author: `${faker.name.lastName()}, ${faker.name.firstName()}`,
        publishingYear: faker.datatype.number({min: 1900, max: 2023}),
        availability: faker.datatype.boolean()
    }
    return book;
}

const randomBookFactory = (num) => {
    const books = [];
    for (let i = 0; i < num; i++) {
        books.push(createRandomBook())
    }
    return books;
}

module.exports = {createRandomBook, randomBookFactory}