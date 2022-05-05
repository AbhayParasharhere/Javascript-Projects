'use strict';

const printForecast = function (temp) {
   let result = '';
   for (let i = 0; i < temp.length; i++) {
      //debugger;
      result += `... ${temp[i]}° in ${i + 1} days`;
   }
   return result;
};

console.log(printForecast([12, 5, -5, 0, 4]));
