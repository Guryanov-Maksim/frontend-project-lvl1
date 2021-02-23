#!/usr/bin/env node

import runGame from '../src/index.js';
import { getTwoNumbersAndTheirGcd, taskForPlayer } from '../src/games/gcd.js';

runGame(
  getTwoNumbersAndTheirGcd,
  taskForPlayer,
);
