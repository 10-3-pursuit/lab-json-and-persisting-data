const { createRandomCat, randomCatMade  } = require("../cats"); // Update with your actual module path
//const data = require("../data/cats"); // Assuming you have a cats.js file in your data folder
//const { createRandomCat } = require("../cats");

describe("Cats", () => {
  describe("getCatsByID", () => {
    it('should return the correct cat object for an existing id', () => {
      const input = createRandomCat()
        expect(input).toHaveProperty("_id") 
        expect(input).toHaveProperty("breed") 
        expect(input).toHaveProperty("description") 
        expect(input).toHaveProperty("price")
        expect(input).toHaveProperty("currency")
        expect(input).toHaveProperty("inStock") 
      });
      it('should return a cat object with a valid price and currency', () => {
        const input = createRandomCat();
        expect(input.currency).toEqual("USD");
        expect(input.price).toMatch(/^\$\d+\.\d{2}$/);
      });
    });
  });

