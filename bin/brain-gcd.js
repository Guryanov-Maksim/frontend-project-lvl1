#!/usr/bin/env node

import runGame from '../src/index.js';
import { getTwoRandomNumbers, getGcd } from '../games/gcd.js';

runGame(
  getTwoRandomNumbers,
  getGcd,
  'Find the greatest common divisor of given numbers.',
);
