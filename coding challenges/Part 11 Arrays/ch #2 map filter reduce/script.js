'use strict';

const agesData1 = [5, 2, 4, 1, 15, 8, 3];
const agesData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else return 16 + age * 4;
  });

  const adultDogs = humanAges.filter(age => age >= 18);

  return adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
};

console.log(calcAverageHumanAge(agesData1));
console.log(calcAverageHumanAge(agesData2));
