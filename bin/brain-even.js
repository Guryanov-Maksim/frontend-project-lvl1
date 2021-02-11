#!/usr/bin/env node

import runGame from '../src/index.js';
import isEven from '../games/even.js';
import getRandomNumber from '../src/randomGenerator.js';

runGame(
  () => getRandomNumber(1, 50),
  (num) => (isEven(num) ? 'yes' : 'no'),
  'Answer "yes" if the number is even, otherwise answer "no".',
);
