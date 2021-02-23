import getRandomNumber from '../randomNumber.js';
import { makeDefaultAcquaintanceOfPlayer } from '../cli.js';

const getRandomMathSign = () => {
  const signs = ['+', '-', '*'];
  const index = getRandomNumber(0, signs.length - 1);
  return signs[index];
};

const getMathExpression = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const sign = getRandomMathSign();
  return [num1, sign, num2];
};

const solveMathExpression = (mathExpression) => {
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

const getAndSolveMathExpression = () => {
  const mathExpression = getMathExpression();
  const solution = solveMathExpression(mathExpression);
  return [mathExpression.join(' '), String(solution)];
};

const taskForPlayer = 'What is the result of the expression?';

export default [
  makeDefaultAcquaintanceOfPlayer,
  getAndSolveMathExpression,
  taskForPlayer,
];
