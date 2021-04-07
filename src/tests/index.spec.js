const { calculateBMI, calculateQuote, getQuoteCoefficient } = require("../utils/QuoteCalulation");

describe("Quote Calculations", () => {
  describe("calculateBMI", () => {
    it("Returns the 0 when passed nothing", () => {
      const bmi = Math.round(calculateBMI());
      expect(bmi).toEqual(0);
    });
    it("Returns the 0 when passed with an invalid height(cm) and weight(kg)", () => {
      const bmi = Math.round(calculateBMI("test", "test1"));
      expect(bmi).toEqual(0);
    });
    it("Returns the correct values when passed with a valid height(cm) and weight(kg)", () => {
      const weight = 55;
      const heightInMeters = 1.55;
      const bmi = Math.round(calculateBMI(weight, heightInMeters));
      expect(bmi).toEqual(23);
    });
    it("Returns the correct values when passed with a valid height(cm) and weight(kg)", () => {
      const weight = 80;
      const heightInMeters = 1.5;
      const bmi = Math.round(calculateBMI(weight, heightInMeters));
      expect(bmi).toEqual(36);
    });
  });
});
