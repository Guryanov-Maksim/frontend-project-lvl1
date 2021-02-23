import {
  showCommonGreeting,
  askAndGetPlayerName,
  greetPlayer,
  askAndGetPlayerAnswer,
} from './cli.js';

const toString = (data) => {
  if (Array.isArray(data)) {
    const [firstElement] = data;
    return Array.isArray(firstElement)
      ? firstElement.join(' ')
      : data.join(' ');
  }
  return String(data);
};

export default (getQuestion, getCorrectAnswer, taskForPlayer) => {
  showCommonGreeting();
  const name = askAndGetPlayerName();
  greetPlayer(name);
  console.log(taskForPlayer);
  for (let round = 0; round < 3; round += 1) {
    const question = getQuestion();
    console.log(`Question: ${toString(question)}`);
    const answer = askAndGetPlayerAnswer('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (answer !== toString(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correnct!');
  }
  console.log(`Congratulations, ${name}!`);
};
