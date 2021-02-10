import getRandomNumber from '../src/randomGenerator.js';

const isEven = (num) => num % 2 === 0;

export const getQuestion = () => getRandomNumber(1, 50);

export const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');
