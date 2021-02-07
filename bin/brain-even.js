#!/usr/bin/env node

import runGame, { getRandomNumber, isEven } from '../src/index.js';

const getQuestion = () => getRandomNumber(1, 50);

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const isWrongAnswer = (playerAnswer, correctAnswer) => playerAnswer !== correctAnswer;

runGame(getQuestion, getCorrectAnswer, isWrongAnswer);
