#!/usr/bin/env node

import runGame from '../src/index.js';
import { getTwoRandomNumbers, getGcd, taskForPlayer } from '../src/games/gcd.js';

runGame(
  getTwoRandomNumbers,
  getGcd,
  taskForPlayer,
);
