// const fs = require("node:fs");
const { writeFileSync, readFileSync } = require("node:fs");
const fs = require('fs');

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

// --> brought to you and parted by chat GPT, initial code we had in class was taking too long too debug and correct and for the sake of time refferred to this resource
// --> this code below created the pathway we needed for code ontop to function properly!


//this is the code needed to check if a directory exists 
// function ensureDirectoryExists(directory) {
//     if (!fs.existsSync(directory)) {
//       fs.mkdirSync(directory, { recursive: true });
//     }
//   }
  
//   function writeJSONFile(path, fileName, data) {
//     ensureDirectoryExists(path); // Ensure the directory exists
//     data = JSON.stringify(data, null, 2);
//     return fs.writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
//   }
  
//   function readJSONFile(path, fileName) {
//     const filePath = `${path}/${fileName}`;
  
//     if (fs.existsSync(filePath)) {
//       const collection = fs.readFileSync(filePath, 'utf-8');
//       return collection ? JSON.parse(collection) : [];
//     } else {
//       return [];
//     }
//   }

module.exports = { writeJSONFile, readJSONFile };