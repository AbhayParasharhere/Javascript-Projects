const bill = Number(prompt("Enter the Bill amount"));

const tip = bill >= 50 && bill <= 300 ? .15 * bill : .2 * bill;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);
