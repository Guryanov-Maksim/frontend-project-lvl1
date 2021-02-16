#!/usr/bin/env node

import runGame from '../src/index.js';
import { getOneRandomNumber, checkPrimality, getTaskForPlayer } from '../src/games/prime.js';

runGame(
  getOneRandomNumber,
  checkPrimality,
  getTaskForPlayer,
);
