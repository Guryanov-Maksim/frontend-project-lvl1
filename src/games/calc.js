import getRandomNumber from '../randomNumber.js';

const getRandomMathSign = () => {
  const signs = ['+', '-', '*'];
  const index = getRandomNumber(0, signs.length - 1);
  return signs[index];
};

export const getMathExpression = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const sign = getRandomMathSign();
  return [num1, sign, num2];
};

export const solveMathExpression = (mathExpression) => {
  const [num1, sign, num2] = mathExpression;
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`non supported operator ${sign}`);
  }
};

export const getTaskForPlayer = () => 'What is the result of the expression?';
