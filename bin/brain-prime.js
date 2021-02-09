#!/usr/bin/env node

import runGame, { getRandomNumber, isPrime } from '../src/index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = () => getRandomNumber(1, 1000);

const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const isWrongAnswer = (playerAnswer, correctAnswer) => playerAnswer !== correctAnswer;

runGame(getQuestion, getCorrectAnswer, isWrongAnswer, task);
