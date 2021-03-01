import getRandomNumber from '../randomNumber.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const iter = (a, b) => {
    const remainder = a % b;
    if (remainder === 0) {
      return b;
    }
    return iter(b, remainder);
  };
  return iter(num1, num2);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const gcd = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  const answer = String(gcd);
  return [question, answer];
};

export default [
  getQuestionAndAnswer,
  taskDescription,
];
