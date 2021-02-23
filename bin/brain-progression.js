#!/usr/bin/env node

import runGame from '../src/index.js';
import configuration from '../src/games/progression.js';
import { getAcquaintedWithPlayer } from '../src/cli.js';

runGame(getAcquaintedWithPlayer, configuration);
