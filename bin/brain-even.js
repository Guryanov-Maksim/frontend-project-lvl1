#!/usr/bin/env node

import runGame from '../src/index.js';
import { getNumberAndItskEvenness, taskForPlayer } from '../src/games/even.js';

runGame(
  getNumberAndItskEvenness,
  taskForPlayer,
);
