import getRandomNumber from '../randomNumber.js';

const taskDescription = 'What number is missing in the progression?';

const makeProgression = (firstElement, progressionStep, progressionLength) => {
  const progression = [firstElement];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = makeProgression(
    getRandomNumber(1, 30),
    getRandomNumber(1, 15),
    10,
  );
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const hiddenElement = progression[hiddenElementIndex];
  const progressionWithHiddenEl = [...progression];
  progressionWithHiddenEl[hiddenElementIndex] = '..';
  const question = progressionWithHiddenEl.join(' ');
  const answer = String(hiddenElement);
  return [question, answer];
};

export default [
  getQuestionAndAnswer,
  taskDescription,
];
