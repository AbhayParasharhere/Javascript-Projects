'use strict';
const tipCalc = (bill) => bill >= 50 && bill <= 300 ? .15 * bill : .2 * bill;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalBills = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(tipCalc(bills[i]));
    totalBills.push(tips[i] + bills[i]);
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}


console.log(`The bills are ${bills}
the tips are ${tips} 
and the total bills are ${totalBills}
. The average total bill is ${calcAverage(totalBills)}`);

