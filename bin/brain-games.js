#!/usr/bin/env node
import runGame from '../src/index.js';
import { getAcquaintedWithPlayer } from '../src/cli.js';

runGame(getAcquaintedWithPlayer);
