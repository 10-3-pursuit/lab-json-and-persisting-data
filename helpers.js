const fs = require("node:fs");
const {writeFileSync, readFileSync} = require("node:fs");

function writeJSONFile(path,fileName,data) {
    data = JSON.stringify(data,null,2)
    return writeFileSync(`${path}/${fileName}`,data, {encoding:"utf-8"})
};
function readJSONFile(path,fileName){
    const collection = readFileSync(`${path}/${fileName}`, "utf8");
    return collection ? JSON.parse(collection):[]
}

module.exports = {
    writeJSONFile,
    readJSONFile
};
