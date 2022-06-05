'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const gk1 = 'Leo';
// const gk2 = 'John';

// const fieldPlayers1 = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a9', 'a10'];
// const fieldPlayers2 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b9', 'b10'];

// const players1 = [gk1, ...fieldPlayers1];
// const players2 = [gk2, ...fieldPlayers2];

const [players1, players2] = game.players;

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//let { team1, team2, x: draw } = game.odds;

// let {
//   odds: { team1, team2, x: draw },
// } = game;

// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log(`Number of Goals : ${players.length}`);
// };

// console.log(`Test: ${team1}, ${team2}, ${draw}`);
// //printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Congratulations Team1 Won');
// team2 < team1 && console.log('Congratulations Team2 Won');
// team1 === team2 && console.log('Draw');

///////////////////////////////////////////////////
const hurdles = [
  [3, 1],
  [3, 1],
  [3, 2],
];
const startingPoint = [1, 1];
let futureCoordinates = [1, 1];
let currentCoordinates = startingPoint;

let finalDestination = [4, 3];

const checkHurdles = function (point) {
  for (let i = 0; i <= hurdles.length; i++) {
    console.log(`Point is ${point} and current hurdle[${i}] = ${hurdles[i]}`);
    if (hurdles[i][0] === point[0] && hurdles[i][1] === point[1]) {
      console.log(`!!!!!!Hurdle encounted!!!!!!!!!`);
      return true;
    } else return false;
  }
};

const randomMove = function (currentCoordinates) {
  let randomMove = Math.trunc(Math.random() * 4);
  switch (randomMove) {
    case 0:
      currentCoordinates[0] += 1;
    case 1:
      currentCoordinates[0] -= 1;
    case 2:
      currentCoordinates[1] += 1;
    case 3:
      currentCoordinates[1] -= 1;
  }

  console.log(currentCoordinates);
  return currentCoordinates;
};

const hurdleHandler = function (point) {
  console.log(checkHurdles(point));
  while (checkHurdles(point) !== false) {
    point = randomMove(point);
  }
  return point;
};

while (
  currentCoordinates[0] != finalDestination[0] &&
  currentCoordinates[1] != finalDestination[1]
) {
  // move in rows first
  while (currentCoordinates[0] != finalDestination[0]) {
    // check for hurdle next first simple move

    if (!checkHurdles(futureCoordinates)) {
      futureCoordinates[0] += 1;
      console.log(
        `ROW OP - Moved from ${currentCoordinates} to ${futureCoordinates}`
      );
      currentCoordinates[0] = futureCoordinates[0];
    } else {
      //futureCoordinates[1] += 1;
      futureCoordinates = hurdleHandler(currentCoordinates);
      currentCoordinates[1] += futureCoordinates[1];
    }
  }

  // move in column
  while (currentCoordinates[1] != finalDestination[1]) {
    // check for hurdle next first simple move
    futureCoordinates[1] += 1;
    console.log(
      `COL OP - Moved from ${currentCoordinates} to ${futureCoordinates}`
    );
    if (!checkHurdles(futureCoordinates))
      currentCoordinates[1] = futureCoordinates[1];
  }
  console.log(currentCoordinates);
  console.log(futureCoordinates);
}
