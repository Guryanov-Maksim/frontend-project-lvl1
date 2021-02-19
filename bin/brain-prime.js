#!/usr/bin/env node

import runGame from '../src/index.js';
import { getOneRandomNumber, checkPrimality, taskForPlayer } from '../src/games/prime.js';

runGame(
  getOneRandomNumber,
  checkPrimality,
  taskForPlayer,
);
