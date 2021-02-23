#!/usr/bin/env node

import runGame from '../src/index.js';
import {
  getProgressionAndHiddenElement,
  taskForPlayer,
} from '../src/games/progression.js';

runGame(
  getProgressionAndHiddenElement,
  taskForPlayer,
);
