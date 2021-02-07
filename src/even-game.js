import getUserAnswer from './cli.js';

const getRandomNumber = () => {
  const max = 50;
  const min = 1;
  return Math.floor(Math.random() * (max - min) + min);
};

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let round = 1; round < 4; round += 1) {
    const num = getRandomNumber();
    console.log(`Question: ${num}`);
    const answer = getUserAnswer('Your answer: ');
    const correctAnswer = getCorrectAnswer(num);
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correnct!');
  }
  console.log(`Congratulations, ${name}!`);
};
