'use strict';
let mark = {
    fName: 'Mark',
    lName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this['BMI'] = this.weight / (this.height ** 2);
        return this.BMI;
    }
}
let john = {
    fName: 'John',
    lName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this['BMI'] = this.weight / (this.height ** 2);
        return this.BMI;
    }
}

let lowerBMIobj;
let whosHigherBMI = (a, b) => {
    if (a.calcBMI() > b.calcBMI()) {
        lowerBMIobj = b;
        return a;
    }
    else if (b.BMI > a.BMI) {
        lowerBMIobj = a;
        return b;
    }
    else {
        return 0;
    }
}

let higherBMIobj = whosHigherBMI(mark, john);

if (higherBMIobj === 0) {
    console.log(`Both have the same BMI of ${john.BMI}`)
}
else {
    console.log(`${higherBMIobj.fName} ${higherBMIobj.lName} (${higherBMIobj.BMI}) is higher than ${lowerBMIobj.fName} ${lowerBMIobj.lName} (${lowerBMIobj.BMI})
    `)
}