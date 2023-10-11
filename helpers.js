const { readFileSync, writeFileSync } = require('node:fs');

function writeJSONFile(path, fileName, data) {
    // JSON.stringify will convert whataver is passed to it, into a JSON string
    data = JSON.stringify(data, null, 2);
    return writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
}

function readJSONFile(path, fileName) {
    // reads a file's contents
    const collection = readFileSync(`${path}/${fileName}`, 'utf8');
    // returns the parsed file or an empty array
    return collection ? JSON.parse(collection) : [];
}

module.exports = {
    writeJSONFile,
    readJSONFile
};