#!/usr/bin/env node

import runGame from '../src/index.js';
import { getQuestion, getHiddenElement } from '../games/progression.js';

runGame(
  getQuestion,
  getHiddenElement,
  'What number is missing in the progression?',
);
