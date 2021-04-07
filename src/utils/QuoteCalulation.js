function calculateQuote({ age, height, weight, isSmoker }) {
  const heightInMeters = height / 100;
  const bmi = Math.round(calculateBMI(weight, heightInMeters));
  const isInAgeRange = age >= 18 && age <= 80;
  const isInBmiRange = bmi >= 18 && bmi <= 32;

  if (!isInAgeRange || !isInBmiRange) return "Unable able to generate Quote - please contact customer services";

  const coefficient = getQuoteCoefficient(age, bmi, isSmoker);
  const quote = 100000 * coefficient;

  return quote;
}

function calculateBMI(weight, height) {
  if (!weight || !height) return 0;
  if (typeof weight !== "number" || typeof height !== "number") return 0;

  const bmi = weight / (height * height);
  return bmi;
}

function getQuoteCoefficient(age, bmi, isSmoker) {
  if (!age || !bmi) return 0;
  if (typeof age !== "number" || typeof bmi !== "number" || typeof isSmoker !== "boolean") return 0;
  let coeffcient;

  const isYoungAdult = age >= 18 && age <= 28;
  const isAdult = age >= 29 && age <= 48;
  const isOlderAdult = age >= 49 && age <= 80;

  const isHealthyBmi = bmi >= 18 && bmi <= 22;
  const isAverageBmi = bmi >= 23 && bmi <= 26;
  const isOverweightBmi = bmi >= 27 && bmi <= 32;

  let bmiCoefficient;
  if (isSmoker) {
    if (isHealthyBmi) bmiCoefficient = 2.4;
    if (isAverageBmi) bmiCoefficient = 3.8;
    if (isOverweightBmi) bmiCoefficient = 2;
  } else {
    if (isHealthyBmi) bmiCoefficient = 3.2;
    if (isAverageBmi) bmiCoefficient = 4.8;
    if (isOverweightBmi) bmiCoefficient = 2.8;
  }

  let ageCoefficient;
  if (isYoungAdult) ageCoefficient = 0;
  if (isAdult) ageCoefficient = 0.6;
  if (isOlderAdult) ageCoefficient = 0.6 * 2;

  coeffcient = Math.round((bmiCoefficient - ageCoefficient) * 10) / 10;
  return coeffcient;
}

module.exports = { calculateBMI, calculateQuote, getQuoteCoefficient };
