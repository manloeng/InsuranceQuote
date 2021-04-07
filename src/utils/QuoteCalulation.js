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
  let coeffcient;

  const isYoungAdult = age >= 18 && age <= 28;
  const isAdult = age >= 29 && age <= 48;
  const isOlderAdult = age >= 49 && age <= 80;

  const isHealthyBmi = bmi >= 18 && bmi <= 22;
  const isAverageBmi = bmi >= 23 && bmi <= 26;
  const isOverweightBmi = bmi >= 27 && bmi <= 32;

  let ageCoefficient;
  if (isSmoker) {
    if (isYoungAdult) ageCoefficient = 2.4;
    if (isAdult) ageCoefficient = 3.8;
    if (isOlderAdult) ageCoefficient = 2;
  } else {
    if (isYoungAdult) ageCoefficient = 3.2;
    if (isAdult) ageCoefficient = 4.8;
    if (isOlderAdult) ageCoefficient = 2.8;
  }

  let bmiCoefficient;
  if (isHealthyBmi) bmiCoefficient = 0;
  if (isAverageBmi) bmiCoefficient = 0.6;
  if (isOverweightBmi) bmiCoefficient = 0.6 * 2;

  coeffcient = ageCoefficient - bmiCoefficient;
  return coeffcient;
}

module.exports = { calculateBMI, calculateQuote, getQuoteCoefficient };
