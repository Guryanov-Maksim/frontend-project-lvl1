#!/usr/bin/env node

import runGame from '../src/index.js';
import { getQuestion, getGcd } from '../games/gcd.js';

runGame(
  getQuestion,
  getGcd,
  'Find the greatest common divisor of given numbers.',
);
