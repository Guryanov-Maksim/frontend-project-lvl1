import readLineSync from 'readline-sync';

export const askPlayer = (text) => readLineSync.question(text);

const showCommonGreeting = () => console.log('Welcome to the Brain Games!');

const greetPlayer = (name) => console.log(`Hello, ${name}`);

export const makeDefaultAcquaintanceOfPlayer = () => {
  showCommonGreeting();
  const name = askPlayer('May I have your name? ');
  greetPlayer(name);
  return name;
};
