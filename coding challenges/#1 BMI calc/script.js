const MARK_WEIGHT = 95;
const JOHN_WEIGHT = 85;
const MARK_HEIGHT = 1.88;
const JOHN_HEIGHT = 1.76;

const MARK_BMI = (MARK_WEIGHT / (MARK_HEIGHT ** 2));
const JOHN_BMI = (JOHN_WEIGHT / (JOHN_HEIGHT ** 2));

const markHigherBMI = MARK_BMI > JOHN_BMI;
console.log(MARK_BMI, JOHN_BMI);
console.log("Does Mark has higher BMI? " + "\nThe result is " + markHigherBMI);