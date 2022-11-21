'use strict';

const arr_unsorted = [8, 32, 71, 11, 1, 0, 12, 0, 100, 30];

const insertionSort = function (arr) {
   const res = [];
   res.push(arr[0]);

   let counter = 1;
   let tempShift = null;

   while (res.length < arr.length) {
      res.push(arr[counter]);
      ++counter;
      for (let i = counter; i > 0; i--) {
         if (res[i - 1] > res[i]) {
            tempShift = res[i - 1];
            res[i - 1] = res[i];
            res[i] = tempShift;
         }
      }
   }
   return res;
};

console.log(insertionSort(arr_unsorted));
console.log(arr_unsorted.sort((a, b) => a - b));
