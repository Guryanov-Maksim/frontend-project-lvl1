import getRandomNumber from '../randomNumber.js';

const getGcd = (numbers) => {
  const [num1, num2] = numbers;
  const iter = (a, b) => {
    const remainder = a % b;
    if (remainder === 0) {
      return b;
    }
    return iter(b, remainder);
  };
  return iter(num1, num2);
};

const getTwoRandomNumbers = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  return [num1, num2];
};

export const getTwoNumbersAndTheirGcd = () => {
  const numbers = getTwoRandomNumbers();
  const gcd = getGcd(numbers);
  return [numbers.join(' '), String(gcd)];
};

export const taskForPlayer = 'Find the greatest common divisor of given numbers.';
