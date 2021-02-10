#!/usr/bin/env node

import runGame from '../src/index.js';
import { getQuestion, getCorrectAnswer } from '../games/prime.js';

runGame(
  getQuestion,
  getCorrectAnswer,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
);
