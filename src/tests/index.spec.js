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

  describe("getQuoteCoefficient", () => {
    it("Returns the correct values when passed with a valid age, bmi and is not smoking", () => {
      let age = "";
      let bmi = "";
      const isSmoker = "";
      let coeffcient = getQuoteCoefficient(age, bmi, isSmoker);
      expect(coeffcient).toEqual(0);
    });
    it("Returns the correct values when passed with a valid age, bmi and is not smoking", () => {
      let age = "test";
      let bmi = "test";
      const isSmoker = false;
      let coeffcient = getQuoteCoefficient(age, bmi, isSmoker);
      expect(coeffcient).toEqual(0);
    });
    it("Returns the correct values when passed with a valid age, bmi and is not smoking", () => {
      let age = 25;
      let bmi = 25;
      const isSmoker = false;
      let coeffcient = getQuoteCoefficient(age, bmi, isSmoker);
      expect(coeffcient).toEqual(4.8);

      age = 50;
      bmi = 30;
      coeffcient = getQuoteCoefficient(age, bmi, isSmoker);
      expect(coeffcient).toEqual(1.6);

      age = 80;
      bmi = 22;
      coeffcient = getQuoteCoefficient(age, bmi, isSmoker);
      expect(coeffcient).toEqual(2);
    });
    it("Returns the correct values when passed with a valid age, bmi and is smoking", () => {
      let age = 25;
      let bmi = 25;
      const isSmoker = true;
      let coeffcient = getQuoteCoefficient(age, bmi, isSmoker);
      expect(coeffcient).toEqual(3.8);

      age = 50;
      bmi = 30;
      coeffcient = getQuoteCoefficient(age, bmi, isSmoker);
      expect(coeffcient).toEqual(0.8);

      age = 80;
      bmi = 22;
      coeffcient = getQuoteCoefficient(age, bmi, isSmoker);
      expect(coeffcient).toEqual(1.2);
    });

    describe("calculateQuote", () => {
      it("Returns the correct values when passed with a valid age, bmi and is smoking", () => {
        let age = 25;
        let weight = 55;
        let height = 155;
        const isSmoker = true;
        let payload = { age, weight, height, isSmoker };
        let quote = calculateQuote(payload);
        expect(quote).toEqual(380000);

        age = 50;
        weight = 80;
        height = 200;
        payload = { age, weight, height, isSmoker };
        quote = calculateQuote(payload);
        expect(quote).toEqual(120000);
      });
      it("Returns the correct values when passed with a valid age, bmi and is not smoking", () => {
        let age = 25;
        let weight = 55;
        let height = 155;
        const isSmoker = false;
        let payload = { age, weight, height, isSmoker };
        let quote = calculateQuote(payload);
        expect(quote).toEqual(480000);

        age = 50;
        weight = 80;
        height = 200;
        payload = { age, weight, height, isSmoker };
        quote = calculateQuote(payload);
        expect(quote).toEqual(200000);
      });
      it("Returns the error message passed with an data set", () => {
        const age = 80;
        const weight = 80;
        const height = 100;
        const isSmoker = true;
        const payload = { age, weight, height, isSmoker };
        const quote = calculateQuote(payload);
        expect(quote).toEqual("Unable able to generate Quote - please contact customer services");
      });
    });
  });
});
