#!/usr/bin/env node

import runGame from '../src/index.js';
import configuration from '../src/games/calc.js';
import { getAcquaintedWithPlayer } from '../src/cli.js';

runGame(getAcquaintedWithPlayer, configuration);
