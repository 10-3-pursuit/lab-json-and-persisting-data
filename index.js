const { generateRandomMaterials } = require("./materials");
const { writeJSONFile, readJSONFile } = require("./helpers"); // importing fs functions from helper file to store outputs of run function into materials.json

// create run fx
const run = () => {
    let materials = readJSONFile("./data", "materials.json");
    if (process.argv[2]) {
      materials.push(generateRandomMaterials(parseInt(process.argv[2]))); // push each materials string into materials.JSON file for storage
    } // using .parseInt bc fx generateRandomMaterials expects a number input but process.argv[2] is passed as a string
    writeJSONFile("./data", "materials.json", materials);
  };
  
  run();