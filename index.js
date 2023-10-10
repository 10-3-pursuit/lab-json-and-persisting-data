const { createRandomMessage, randomMessageFactory } = require("./messages");
const{writeJSONFile , ReadJSONFile} = require("./helpers")


const run = () => {
let products = ReadJSONFile('./data', 'messages.json')
if (process.argv[3]) {
// console.log(randomProductFactory(process.argv[3]));
products.push(...randomMessageFactory(process.argv[3]))
} else {
// console.log(createRandomProduct());
products.push(createRandomMessage());
}
writeJSONFile("./data", "messages.json", products)
}
run();
