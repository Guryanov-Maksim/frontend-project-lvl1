#!/usr/bin/env node

import runGame from '../src/index.js';
import { getOneRandomNumber, checkEvenness, getTaskForPlayer } from '../src/games/even.js';

runGame(
  getOneRandomNumber,
  checkEvenness,
  getTaskForPlayer,
);
