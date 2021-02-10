#!/usr/bin/env node

import runGame from '../src/index.js';
import { getQuestion, getCorrectAnswer } from '../games/calc.js';

runGame(
  getQuestion,
  getCorrectAnswer,
  'What is the result of the expression?',
);
