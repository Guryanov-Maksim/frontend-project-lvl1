#!/usr/bin/env node

import runGame from '../src/index.js';
import { getNumberAndItsPrimality, taskForPlayer } from '../src/games/prime.js';

runGame(
  getNumberAndItsPrimality,
  taskForPlayer,
);
