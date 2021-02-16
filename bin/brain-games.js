#!/usr/bin/env node
import { showGreeting, getPlayerName, greetPlayer } from '../src/cli.js';

showGreeting();
greetPlayer(getPlayerName());
