#!/usr/bin/env node

import runGame, { getRandomNumber } from '../src/index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (numbers) => {
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

const getQuestion = () => {
  const findNumbersWithGcd = (num) => {
    const result = getRandomNumber(1, 100);
    // console.log(getGcd(`${num} ${result}`));
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

const isWrongAnswer = (playerAnswer, correctAnswer) => playerAnswer !== correctAnswer.toString();

runGame(getQuestion, getGcd, isWrongAnswer, task);
