const fs = require("node:fs");
const { writeFileSync, readFileSync } = require("node:fs");

const writeJSONFile = (path, fileName, data) => {
    //JSON.stringify will convert whatever is passed to it, into a JSON string
    data = JSON.stringify(data, null , 2);
    //writeFileSync takes three arguments:
    //first: path of file to create
    //second: is the data to put into the file that we are creating 
    //third: options for encoding. Always going to be 'utf-8'
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf8" });
}

const readJSONFile = (path, fileName) => {
    //reads a filem and returns the contents
    const collection = readFileSync(`${path}/${fileName}`, 'utf-8'); 
    //here we use a ternary, which will return the contents of the file we read, if there ARE contents, OR if there aren't contents then we will return an empty array 
    return collection ? JSON.parse(collection) : []; 
} 

module.exports = { writeJSONFile, readJSONFile };