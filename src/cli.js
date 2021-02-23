import readLineSync from 'readline-sync';

export const askAndGetPlayerAnswer = (text) => readLineSync.question(text);

const showCommonGreeting = () => console.log('Welcome to the Brain Games!');

const askAndGetPlayerName = () => askAndGetPlayerAnswer('May I have your name? ');

const greetPlayer = (name) => console.log(`Hello, ${name}`);

export const getAcquaintedWithPlayer = () => {
  showCommonGreeting();
  const name = askAndGetPlayerName();
  greetPlayer(name);
  return name;
};
