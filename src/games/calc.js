import getRandomNumber from '../src/randomGenerator.js';

const getRandomMathSign = () => {
  const signs = ['+', '-', '*'];
  const index = getRandomNumber(0, 2);
  return signs[index];
};

export const getMathExpression = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const sign = getRandomMathSign();
  return `${num1} ${sign} ${num2}`;
};

export const solveMathExpression = (mathExpression) => {
  const [num1, sign, num2] = mathExpression.split(' ');
  if (sign === '+') {
    return `${Number(num1) + Number(num2)}`;
  }
  if (sign === '-') {
    return `${Number(num1) - Number(num2)}`;
  }
  return `${Number(num1) * Number(num2)}`;
};

export const getTaskForPlayer = () => 'What is the result of the expression?';
