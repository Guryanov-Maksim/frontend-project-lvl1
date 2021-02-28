import getRandomNumber from '../randomNumber.js';

const isEven = (num) => num % 2 === 0;

const getOneRandomNumber = () => getRandomNumber(1, 50);

const checkEvenness = (num) => (isEven(num) ? 'yes' : 'no');

const getNumberAndItskEvenness = () => {
  const number = getOneRandomNumber();
  const evenness = checkEvenness(number);
  return [String(number), evenness];
};

const taskForPlayer = 'Answer "yes" if the number is even, otherwise answer "no".';

export default [
  getNumberAndItskEvenness,
  taskForPlayer,
];
