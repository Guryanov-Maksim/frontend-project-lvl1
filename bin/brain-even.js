#!/usr/bin/env node

import runGame from '../src/index.js';
import { getOneRandomNumber, checkEvenness, taskForPlayer } from '../src/games/even.js';

runGame(
  getOneRandomNumber,
  checkEvenness,
  taskForPlayer,
);
