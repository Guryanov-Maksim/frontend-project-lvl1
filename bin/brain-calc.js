#!/usr/bin/env node

import runGame from '../src/index.js';
import { getMathExpression, solveMathExpression, taskForPlayer } from '../src/games/calc.js';

runGame(
  getMathExpression,
  solveMathExpression,
  taskForPlayer,
);
