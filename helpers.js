const { readFileSync, writeFileSync } = require("node:fs"); // importing fs built-in module

function readJSONFile(path, fileName) {
    const collection = readFileSync(`${path}/${fileName}`, "utf8");
    return collection ? JSON.parse(collection) : [];
  }
  
  // writes generated inputs (which in this case is generated data) into JSON file products.JSON
  function writeJSONFile(path, fileName, data) {
    data = JSON.stringify(data, null, 2); // JSON.stringify(value[, replacer[, space]])
      //value: The JavaScript object or value you want to convert to a JSON string so can write data (which must be string format) to JSON
      //replacer (optional): A function or an array used to filter-out values because it alters the behavior of the stringification process.
      //space (optional): A String or Number that's used to insert white space into the output JSON string for readability purposes.
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
  }
  
  // to export functions
  module.exports = {
    readJSONFile,
    writeJSONFile,
  };