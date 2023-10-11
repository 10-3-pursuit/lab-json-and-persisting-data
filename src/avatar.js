const { faker } = require("@faker-js/faker");

function generateGameAvatar() {
  const avatar = {
    __id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    photo: faker.image.avatar(),
 };
  return avatar;
}

console.log(generateGameAvatar());

module.exports = { generateGameAvatar };