const {writeJSONFile, readJSONFile} = require("./helpers")
const {createRandomBook, randomBookFactory} =  require("./books")

const run = () => {
    let books = readJSONFile("./data", "books.json")
    if (process.argv[3]) {
        books.push(...randomBookFactory(process.argv[3]))
    } else {
        books.push(createRandomBook());
    }
    writeJSONFile("./data", "books.json", books)
}

run()