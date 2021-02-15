import getRandomNumber from '../randomNumber.js';

const isEven = (num) => num % 2 === 0;

export const getOneRandomNumber = () => getRandomNumber(1, 50);

export const checkEvenness = (num) => (isEven(num) ? 'yes' : 'no');

export const getTaskForPlayer = () => 'Answer "yes" if the number is even, otherwise answer "no".';
