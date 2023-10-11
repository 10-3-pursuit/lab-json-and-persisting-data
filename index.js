const { createRandomCat, randomCatMade } = require("./cats");
const { writeJSONFile, readJSONFile } = require("./helpers");
const fs = require("node:fs");

function run() {
  let cats = readJSONFile("./data", "cats.json");
  console.log(cats);
  if (process.argv[3]) {
    cats.push(...randomCatMade(process.argv[3]));
  } else {
    cats.push(createRandomCat());
  }
  writeJSONFile("./data", "cats.json", cats);
}
run();