import { askPlayer, makeDefaultAcquaintanceOfPlayer } from './cli.js';

export default (configuration = null) => {
  if (configuration === null) {
    makeDefaultAcquaintanceOfPlayer();
    return;
  }
  const [
    getAcquaintedWithPlayer,
    getQuestionAndAnswer,
    taskForPlayer,
  ] = configuration;
  const name = getAcquaintedWithPlayer();
  console.log(taskForPlayer);
  const numberOfRounds = 3;
  for (let round = 0; round < numberOfRounds; round += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = askPlayer('Your answer: ');
    if (playerAnswer !== answer) {
      console.log(`'${playerAnswer}' is wrong answer ;( Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correnct!');
  }
  console.log(`Congratulations, ${name}!`);
};
