#!/usr/bin/env node

import runGame from '../src/index.js';
import { getProgressionWithHiddenElement, getHiddenElement } from '../games/progression.js';

runGame(
  getProgressionWithHiddenElement,
  getHiddenElement,
  'What number is missing in the progression?',
);
