#!/usr/bin/env node

import runGame from '../src/index.js';
import {
  getProgressionWithHiddenElement,
  getHiddenElement,
  taskForPlayer,
} from '../src/games/progression.js';

runGame(
  getProgressionWithHiddenElement,
  getHiddenElement,
  taskForPlayer,
);
