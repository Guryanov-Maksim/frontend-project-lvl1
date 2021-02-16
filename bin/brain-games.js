#!/usr/bin/env node
import { showCommonGreeting, getPlayerName, greetPlayer } from '../src/cli.js';

showCommonGreeting();
greetPlayer(getPlayerName());
