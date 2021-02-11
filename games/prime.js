import getRandomNumber from '../src/randomGenerator.js';

const isPrime = (num) => {
// Primality test using 6k+-1 optimization
  if (num <= 3) {
    return num > 1;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i ** 2 <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

export const getQuestion = () => getRandomNumber(1, 1000);

export const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');