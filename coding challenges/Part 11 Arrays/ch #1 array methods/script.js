'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaCpy = dogsJulia.slice();

  dogsJuliaCpy = dogsJuliaCpy.slice(1, -2);
  //console.log(dogsJuliaCpy);

  const finalDogs = dogsJuliaCpy.concat(dogsKate);

  finalDogs.forEach(function (dogAge, index) {
    if (Number(dogAge) >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dogAge} years old 🐕`
      );
    } else {
      console.log(
        `Dog number ${index + 1} is still a puppy of age ${dogAge} 🐶`
      );
    }
  });
};

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate1 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

checkDogs(dogsJulia1, dogsKate1);
checkDogs(dogsJulia2, dogsKate2);
