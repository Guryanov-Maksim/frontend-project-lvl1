#!/usr/bin/env node

import runGame from '../src/index.js';
import { getAndSolveMathExpression, taskForPlayer } from '../src/games/calc.js';

runGame(
  getAndSolveMathExpression,
  taskForPlayer,
);
