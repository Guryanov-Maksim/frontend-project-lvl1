#!/usr/bin/env node
import { showCommonGreeting, askAndGetPlayerName, greetPlayer } from '../src/cli.js';

showCommonGreeting();
greetPlayer(askAndGetPlayerName());
