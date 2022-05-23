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

const gk1 = 'Leo';
const gk2 = 'John';

const fieldPlayers1 = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a9', 'a10'];
const fieldPlayers2 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b9', 'b10'];

const players1 = [gk1, ...fieldPlayers1];
const players2 = [gk2, ...fieldPlayers2];

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//let { team1, team2, x: draw } = game.odds;

let {
  odds: { team1, team2, x: draw },
} = game;

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(`Number of Goals : ${players.length}`);
};

console.log(`Test: ${team1}, ${team2}, ${draw}`);
//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Congratulations Team1 Won');
team2 < team1 && console.log('Congratulations Team2 Won');
team1 === team2 && console.log('Draw');
