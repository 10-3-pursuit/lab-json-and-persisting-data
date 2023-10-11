const { generateRandomMaterials } = require("./materials"); // importing generator function
const { writeJSONFile, readJSONFile } = require("./helpers"); // importing fs functions from helper file to store outputs of run function into materials.json

// create run fx so user can run generator by inputting numbers in the terminal (npm run materials <number>)
const run = () => {
    let materials = readJSONFile("./data", "materials.json");
      materials.push(generateRandomMaterials((process.argv[2]))); // push each materials string into materials.JSON file for storage
     // using .parseInt bc fx generateRandomMaterials expects a number input but process.argv[2] is passed as a string
    writeJSONFile("./data", "materials.json", materials);
  };
  
  run();

  // works