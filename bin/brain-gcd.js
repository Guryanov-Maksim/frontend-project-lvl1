#!/usr/bin/env node

import runGame from '../src/index.js';
import { getTwoRandomNumbers, getGcd, getTaskForPlayer } from '../src/games/gcd.js';

runGame(
  getTwoRandomNumbers,
  getGcd,
  getTaskForPlayer,
);
