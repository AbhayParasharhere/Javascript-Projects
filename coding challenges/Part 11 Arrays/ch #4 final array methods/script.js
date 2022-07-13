'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(sarahDog);
console.log(
  sarahDog.curFood > sarahDog.recommendedFood
    ? "Sarah's dog is eating too much"
    : "Sarah's dog is eating too little"
);

const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (sum, dog) => {
    if (dog.curFood > dog.recommendedFood)
      sum.ownersEatTooMuch.push(dog.owners);
    else if (dog.curFood < dog.recommendedFood)
      sum.ownersEatTooLittle.push(dog.owners);
    return sum;
  },
  { ownersEatTooMuch: [], ownersEatTooLittle: [] }
);

console.log(ownersEatTooMuch, ownersEatTooLittle);

console.log(`${ownersEatTooMuch.flat().join(' and ')} dogs eat too much `);
console.log(`${ownersEatTooLittle.flat().join(' and ')} dogs eat too little `);

console.log(
  `${
    dogs.some(dog => dog.recommendedFood === dog.curFood)
      ? 'some dogs are exactly eating'
      : 'No dog is eating'
  } at the recommended food portion'`
);

console.log(
  `${
    dogs.some(
      dog =>
        dog.curFood > dog.recommendedFood * 0.9 &&
        dog.curFood < dog.recommendedFood * 1.1
    )
      ? 'some dogs are eating OK'
      : 'No dog is eating OK'
  } amounts of food portions'`
);

const okayFoodDogs = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(okayFoodDogs);

const dogsCpy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsCpy);
