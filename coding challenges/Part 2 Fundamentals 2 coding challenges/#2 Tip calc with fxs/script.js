'use strict';
const tipCalc = (bill) => bill >= 50 && bill <= 300 ? .15 * bill : .2 * bill;
const bills = [125, 555, 44];
const tips = [];
const totalBills = [];

tips.push(tipCalc(bills[0]));
tips.push(tipCalc(bills[1]));
tips.push(tipCalc(bills[2]));

totalBills.push(tips[0] + bills[0]);
totalBills.push(tips[1] + bills[1]);
totalBills.push(tips[2] + bills[2]);

console.log(`The bills are ${bills}
the tips are ${tips} 
and the total bills are ${totalBills}`);

const Abhay = {
    fName: 'Abhay',
    lName: 'Parashar',
    friends: ["Tanay", "Ervin", "Shawn"]
};

console.log(Abhay['f' + 'Name']);
Abhay['location'] = "Canada";
Abhay.email = "abhayparasharr@gmail.com"
console.log(`Abhay has ${Abhay.friends.length} friends and his best friend is called ${Abhay.friends[0]}`);
