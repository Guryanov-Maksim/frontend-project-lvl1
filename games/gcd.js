import getRandomNumber from '../src/randomGenerator.js';

export const getGcd = (numbers) => {
  const [num1, num2] = numbers
    .split(' ')
    .map((num) => Number(num))
    .sort();
  const iter = (a, b) => {
    const remainder = a % b;
    if (remainder === 0) {
      return b;
    }
    return iter(b, remainder);
  };
  return iter(num1, num2);
};

export const getQuestion = () => {
  const findNumbersWithGcd = (num) => {
    const result = getRandomNumber(1, 100);
    if (getGcd(`${num} ${result}`) !== 1) {
      return result;
    }
    return findNumbersWithGcd(num);
  };

  const mustBeWithGcd = getRandomNumber(1, 3) === 1;
  const num1 = getRandomNumber(1, 100);
  const num2 = mustBeWithGcd ? findNumbersWithGcd(num1) : getRandomNumber(1, 100);
  return `${num1} ${num2}`;
};
