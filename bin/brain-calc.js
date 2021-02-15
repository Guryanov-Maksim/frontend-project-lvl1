#!/usr/bin/env node

import runGame from '../src/index.js';
import { getMathExpression, solveMathExpression, getTaskForPlayer } from '../src/games/calc.js';

runGame(
  getMathExpression,
  solveMathExpression,
  getTaskForPlayer,
);
