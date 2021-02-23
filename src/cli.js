import readLineSync from 'readline-sync';

export const askAndGetPlayerAnswer = (text) => readLineSync.question(text);

export const showCommonGreeting = () => console.log('Welcome to the Brain Games!');

export const askAndGetPlayerName = () => askAndGetPlayerAnswer('May I have your name? ');

export const greetPlayer = (name) => console.log(`Hello, ${name}`);
