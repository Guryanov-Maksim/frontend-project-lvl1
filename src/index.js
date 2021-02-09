import getUserAnswer from './cli.js';

export const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min) + min)
);

export const getRandomMathSign = () => {
  const signs = ['+', '-', '*'];
  const index = getRandomNumber(0, 2);
  return signs[index];
};

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
// Primality test using 6k+-1 optimization
  if (num <= 3) {
    return num > 1;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i ** 2 <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

export default (getQuestion, getCorrectAnswer, isWrongAnswer, task) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(task);
  for (let round = 1; round <= 3; round += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = getUserAnswer('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (isWrongAnswer(answer, correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correnct!');
  }
  console.log(`Congratulations, ${name}!`);
};
