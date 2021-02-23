import getRandomNumber from '../randomNumber.js';

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

export const getProgressionAndHiddenElement = () => {
  const hiddenElementIndex = getRandomNumber(0, 9);
  const progression = makeProgression();
  const hiddenElement = progression[hiddenElementIndex];
  const progressionWithHiddenEl = progression.map((item, index) => (
    index === hiddenElementIndex ? '..' : item
  ));
  return [progressionWithHiddenEl.join(' '), String(hiddenElement)];
};

// export const getHiddenElement = (progressionAndHiddenElement) => {
//   const [, hiddenElement] = progressionAndHiddenElement;
//   return hiddenElement;
// };

// export getQuestionAndAnswer = () => {
//   const progression = getProgressionWithHiddenElement();
// };

export const taskForPlayer = 'What number is missing in the progression?';
