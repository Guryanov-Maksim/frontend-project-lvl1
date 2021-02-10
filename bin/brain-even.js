#!/usr/bin/env node

import runGame from '../src/index.js';
import { getQuestion, getCorrectAnswer } from '../games/even.js';

runGame(
  getQuestion,
  getCorrectAnswer,
  'Answer "yes" if the number is even, otherwise answer "no".',
);
