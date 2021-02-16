import getRandomNumber from '../randomNumber.js';

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

export const getTwoRandomNumbers = () => {
  const findNumbersWithGcd = (num) => {
    const result = getRandomNumber(1, 100);
    if (getGcd(`${num} ${result}`) !== 1) {
      return result;
    }
    return findNumbersWithGcd(num);
  };

export const getTaskForPlayer = () => 'Find the greatest common divisor of given numbers.';
