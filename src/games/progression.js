import getRandomNumber from '../randomNumber.js';
import { makeDefaultAcquaintanceOfPlayer } from '../cli.js';

const makeProgression = () => {
  const firstElement = getRandomNumber(1, 30);
  const progressionStep = getRandomNumber(1, 15);
  const progressionLength = 10;
  const progression = [firstElement];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getProgressionAndHiddenElement = () => {
  const progression = makeProgression();
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const hiddenElement = progression[hiddenElementIndex];
  const progressionWithHiddenEl = progression.map((item, index) => (
    index === hiddenElementIndex ? '..' : item
  ));
  return [progressionWithHiddenEl.join(' '), String(hiddenElement)];
};

const taskForPlayer = 'What number is missing in the progression?';

export default [
  makeDefaultAcquaintanceOfPlayer,
  getProgressionAndHiddenElement,
  taskForPlayer,
];
