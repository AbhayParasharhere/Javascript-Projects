// 'use strict';

// const arr_unsorted = [8, 32, 71, 11, 1, 0, 12, 0, 100, 30];
// console.log(arr_unsorted);
// const selectionSort = function (arr) {
//    let temp = 0;
//    let swapIndex = 0;
//    let start = 0;

//    let min = Number.MAX_SAFE_INTEGER;
//    while (start < arr.length) {
// v        for (let i = start; i < arr.length; i++) {
//          if (arr[i] < min) {
//             min = arr[i];
//             swapIndex = i;
//             console.log('min value is ' + min + ' at index ' + swapIndex);
//          }
//       }
//       // swap(arr[start],min)
//       temp = arr[start];
//       arr[swapIndex] = temp;
//       arr[start] = min;
//       ++start;
//       // reset min
//       min = Number.MAX_SAFE_INTEGER;
//    }
//    return arr;
// };

// let arr_unsorted_cpy = [...arr_unsorted];
// console.log(selectionSort(arr_unsorted_cpy));
// console.log(arr_unsorted.sort((a, b) => a - b));

let strs = ['flower', 'flow', 'flight'];
//strs = ['dog', 'racecar', 'car'];

var longestCommonPrefix = function (strs) {
   let result = '';
   let counter = 0;
   let match_count = -1; // as 1 match is always there with starting char in the 0th array
   let match_char = strs[0]?.at(0);
   let match = true;

   while (match === true) {
      for (let i = 0; i < strs.length; i++) {
         if (!(match_char === strs[i]?.at(counter))) {
            match = false;
         } else {
            match_count++;
         }
         match_char = strs[i]?.at(counter);
         //console.log(match_count);
      }
      if (match_count === strs.length - 1) result += match_char;
      ++counter;
      match_count = 0;
   }
   return result;
};

console.log(longestCommonPrefix(strs));
