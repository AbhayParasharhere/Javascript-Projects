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

for(const [index,scorer] of game.scored.entries()){
  console.log(`Goal ${index + 1}: ${scorer} `);
}

let avgOdd = 0;
for(const value of Object.values(game.odds)){
  avgOdd += value;
}

avgOdd = avgOdd / Object.keys(game.odds).length;
console.log(avgOdd);

for(const [key,value] of Object.entries(game.odds)){
  let team = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${team} : ${value}`);
}