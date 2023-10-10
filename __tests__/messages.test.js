const { createRandomMessage } = require('../messages'); 

// just made some tests could have made more but it's just for pratice for this lab
describe("Random Messages", () => {
  describe("createRandomMessage()", () => {
    // test 1
    it("Should return an object with the correct properties", () => {
      const randomMessage = createRandomMessage();
      expect(randomMessage).toHaveProperty('_id');
      expect(randomMessage).toHaveProperty('Username');
      expect(randomMessage).toHaveProperty('post');
      expect(randomMessage).toHaveProperty('postedToday');
      expect(randomMessage).toHaveProperty('Upvotes');
    });
    //test 2
    it("Should have a valid _id ", () => {
      const randomMessage = createRandomMessage();
      // needs to be a string
      expect(typeof randomMessage._id).toBe('string');
      //not empty id
      expect(randomMessage._id.length).toBeGreaterThan(0);
    });

  });
});