// 'use strict';
// let dolphinScore1 = Number(prompt("Enter the score for dolphin in round 1"));
// let dolphinScore2 = Number(prompt("Enter the score for dolphin in round 2"));
// let dolphinScore3 = Number(prompt("Enter the score for dolphin in round 3"));

// let koalaScore1 = Number(prompt("Enter the score for koalas in round 1"));
// let koalaScore2 = Number(prompt("Enter the score for koalas in round 2"));
// let koalaScore3 = Number(prompt("Enter the score for koalas in round 3"));

// // const calcAvg = function (score1, score2, score3) {
// //     return (score1 + score2 + score3) / 3;
// // }
// const calcAvg = (a, b, c) => (a + b + c) / 3;

// const checkWinner = function (avgDolhins, avgKoalas) {
//     let result;
//     if (avgDolhins >= 2 * avgKoalas) { result = `Dolphins win(${avgDolhins} vs. ${avgKoalas})` }
//     else if (avgKoalas >= 2 * avgDolhins) { result = `Koalas win(${avgKoalas} vs. ${avgDolhins})` }
//     else { result = `No one won avgKoalas is ${avgKoalas} and avgDolphins is ${avgDolhins}`; }
//     console.log(result);
//     return result;
// }
// const dolphinAverage = calcAvg(dolphinScore1, dolphinScore2, dolphinScore3);
// const koalaAverage = calcAvg(koalaScore1, koalaScore2, koalaScore3);

// let answer = checkWinner(dolphinAverage, koalaAverage);

/**
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
   const ransomNoteParts = ransomNote.split('');
   const magazineParts = magazine.split('');

   let contains = true;
   ransomNoteParts.forEach(function (value) {
      //console.log(magazine.includes(value));
      if (magazineParts.includes(value)) {
         magazineParts.splice(magazineParts.indexOf(value), 1);
         console.log(magazineParts);
      } else contains = false;
   });
   return contains;
};

console.log(canConstruct('aa', 'aab'));
