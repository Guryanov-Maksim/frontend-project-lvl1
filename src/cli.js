import readLineSync from 'readline-sync';

export const getPlayerAnswer = (text) => readLineSync.question(text);

export const showCommonGreeting = () => console.log('Welcome to the Brain Games!');

export const getPlayerName = () => getPlayerAnswer('May I have your name? ');

export const greetPlayer = (name) => console.log(`Hello, ${name}`);
