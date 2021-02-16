#!/usr/bin/env node

import runGame from '../src/index.js';
import isPrime from '../games/prime.js';
import getRandomNumber from '../src/randomNumber.js';

runGame(
  () => getRandomNumber(1, 1000),
  (num) => (isPrime(num) ? 'yes' : 'no'),
  'Answer "yes" if given number is prime. Otherwise answer "no".',
);
