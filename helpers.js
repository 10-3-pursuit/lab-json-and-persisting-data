const { writeFileSync, readFileSync } = require('node:fs');

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data, null, 2);
  return writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
}

function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, 'utf-8');
  return collection ? JSON.parse(collection) : [];
}

module.exports = {
  writeJSONFile,
  readJSONFile,
};


// const fs = require('fs');

// function ensureDirectoryExists(directory) {
//   if (!fs.existsSync(directory)) {
//     fs.mkdirSync(directory, { recursive: true });
//   }
// }

// function writeJSONFile(path, fileName, data) {
//   ensureDirectoryExists(path); // Ensure the directory exists
//   data = JSON.stringify(data, null, 2);
//   return fs.writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
// }

// function readJSONFile(path, fileName) {
//   const filePath = `${path}/${fileName}`;

//   if (fs.existsSync(filePath)) {
//     const collection = fs.readFileSync(filePath, 'utf-8');
//     return collection ? JSON.parse(collection) : [];
//   } else {
//     return [];
//   }
// }

// module.exports = {
//   writeJSONFile,
//   readJSONFile,
// };
