import {
  showCommonGreeting,
  getPlayerName,
  greetPlayer,
  getPlayerAnswer,
} from './cli.js';

const toString = (data) => {
  if (Array.isArray(data)) {
    return data.join(' ');
  }
  return String(data);
};

export default (getQuestion, getCorrectAnswer, getTaskForPlayer) => {
  showCommonGreeting();
  const name = getPlayerName();
  greetPlayer(name);
  const taskForPlayer = getTaskForPlayer();
  console.log(taskForPlayer);
  for (let round = 0; round < 3; round += 1) {
    const question = getQuestion();
    console.log(`Question: ${toString(question)}`);
    const answer = getPlayerAnswer('Your answer: ');
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
