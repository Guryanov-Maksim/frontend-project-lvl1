import getUserAnswer from './cli.js';

export const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min) + min)
);

export default (getQuestion, getCorrectAnswer, task) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(task);
  for (let round = 1; round <= 3; round += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = getUserAnswer('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (answer !== `${correctAnswer}`) {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correnct!');
  }
  console.log(`Congratulations, ${name}!`);
};
