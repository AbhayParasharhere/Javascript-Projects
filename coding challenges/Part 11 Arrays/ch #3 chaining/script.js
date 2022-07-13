'use strict';

const agesData1 = [5, 2, 4, 1, 15, 8, 3];
const agesData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
};

console.log(calcAverageHumanAge(agesData1));
console.log(calcAverageHumanAge(agesData2));
