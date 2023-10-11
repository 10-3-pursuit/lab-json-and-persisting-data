const {createRandomBook, randomBookFactory} = require("../books")

describe("each book should have the following properties", () => {
    test("isbn", () => {
        const newBook = createRandomBook();
        expect(newBook).toHaveProperty('isbn')
    })
    test("title", () => {
        const newBook = createRandomBook();
        expect(newBook).toHaveProperty('title')
    })
    test("author", () => {
        const newBook = createRandomBook();
        expect(newBook).toHaveProperty('author')
    })
    test("publishingYear", () => {
        const newBook = createRandomBook();
        expect(newBook).toHaveProperty('publishingYear')
    })
    test("availability", () => {
        const newBook = createRandomBook();
        expect(newBook).toHaveProperty('availability')
    })
})

describe("randomBookFactory(num) should return an array of num length", () => {
    test("3 books", () => {
        const threeBooks = randomBookFactory(3);
        expect(threeBooks.length).toEqual(3)
    })
    test("0 books", () => {
        const threeBooks = randomBookFactory(0);
        expect(threeBooks.length).toEqual(0)
    })
})