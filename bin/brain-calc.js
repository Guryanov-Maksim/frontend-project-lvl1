#!/usr/bin/env node

import runGame from '../src/index.js';
import { getMathExpression, solveMathExpression } from '../games/calc.js';

runGame(
  getMathExpression,
  solveMathExpression,
  'What is the result of the expression?',
);
