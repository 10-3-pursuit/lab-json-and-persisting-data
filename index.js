const { randomSynopsisFactory, createRandomSynopsis } = require("./fakerData");
const { writeJSONFile, readJSONFile } = require("./helpers");

function run() {
  let synopsi = readJSONFile("./data", "fakerData.json");
//   console.log(products);
  if (process.argv[3]) {
    synopsi.push(...randomSynopsisFactory(process.argv[3]));
  } else {
    synopsi.push(createRandomSynopsis());
  }
  writeJSONFile("./data", "fakerData.json", synopsi);
}

run();