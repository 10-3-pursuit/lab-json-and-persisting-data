// helpers js
const { writeFileSync, readFileSync } = require("node:fs");

function writeJSONFile(path, fileName, data) {
    // JSON.stringify will convert whatever is passed to it, into JSON string
    data =JSON.stringify(data,null,2)
    // writeFIleSynce takes three arguments:
    // first: path of file to create
    // second: is the data to put into the file we are createing
    // third: option is for encodeing. Always going to be 'utf-8'
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}
const ReadJSONFile = (path, fileName) =>{
    // line 16 read a file and returns the contents
    const collection = readFileSync(`${path}/${fileName}`, "utf8");
    /* line 18 is a tenary, which will return contents of thh file we read, if there are contents or if there arn't 
    any contents they will return empty array*/
    return collection ? JSON.parse(collection) : [];
};

module.exports = {
    writeJSONFile,
    ReadJSONFile
};