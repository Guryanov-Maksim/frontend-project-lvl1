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

export default (getQuestion, getCorrectAnswer, isWrongAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
