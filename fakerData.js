const {faker} = require('@faker-js/faker')

function createRandomSynopsis() {
    const synopsis = {
      _id: faker.finance.account(),
      companyName: faker.company.name(),
      companyNumber: faker.phone.number(),
      missionStatement: faker.lorem.text(),
      stillOpen: faker.datatype.boolean(),
    };
    return synopsis;
  }
  

  function randomSynopsisFactory(num) {
    const synopsi = [];
    for (let i = 0; i < num; i++) {
      synopsi.push(createRandomSynopsis());
    }
    return synopsi;
  }
  
  
  module.exports = {
      randomSynopsisFactory,
      createRandomSynopsis
  }