#!/usr/bin/env node
import askPlayer from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askPlayer('May I have your name? ');
console.log(`Hello, ${name}`);
