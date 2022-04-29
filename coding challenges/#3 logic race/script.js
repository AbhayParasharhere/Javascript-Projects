let dolphinScore1 = Number(prompt("Enter the score for dolphin in round 1"));
let dolphinScore2 = Number(prompt("Enter the score for dolphin in round 2"));
let dolphinScore3 = Number(prompt("Enter the score for dolphin in round 3"));

let koalaScore1 = Number(prompt("Enter the score for koalas in round 1"));
let koalaScore2 = Number(prompt("Enter the score for koalas in round 2"));
let koalaScore3 = Number(prompt("Enter the score for koalas in round 3"));

const dolphinAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

if ((dolphinAverage > koalaAverage) && (dolphinAverage >= 100))
    console.log(`The winner is Dolhins with an average score of ${dolphinAverage}`);
else if ((dolphinAverage === koalaAverage) && (dolphinAverage >= 100)) {
    console.log(`Tie between Dolphins and Koalas with an average score of ${dolphonAverage} . Both teams win `);
}
else if ((koalaAverage > dolphinAverage) && (koalaAverage >= 100)) {
    console.log(`The winner is Koalas with an average score of ${koalsAverage}`);
}
else {
    console.log(`No team won since both team's average score is less than 100
        Dolhins average is ${dolphinAverage} and Koalas average is ${koalaAverage} `);
}
