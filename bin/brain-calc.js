#!/usr/bin/env node

import runGame, { getRandomNumber, getRandomMathSign } from '../src/index.js';

const task = 'What is the result of the expression?';

const getQuestion = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const sign = getRandomMathSign();
  return `${num1} ${sign} ${num2}`;
};

const getCorrectAnswer = (mathExpression) => {
  const [num1, sign, num2] = mathExpression.split(' ');
  if (sign === '+') {
    return `${Number(num1) + Number(num2)}`;
  }
  if (sign === '-') {
    return `${Number(num1) - Number(num2)}`;
  }
  return `${Number(num1) * Number(num2)}`;
};

const isWrongAnswer = (playerAnswer, correctAnswer) => playerAnswer !== correctAnswer;

runGame(getQuestion, getCorrectAnswer, isWrongAnswer, task);
