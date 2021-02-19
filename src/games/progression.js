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

export const getProgressionWithHiddenElement = () => {
  const position = getRandomNumber(0, 9);
  const progression = makeProgression();
  const progressionWithHiddenEl = progression.map((item, index) => (
    index === position ? '..' : item
  ));
  return progressionWithHiddenEl;
};

export const getHiddenElement = (progression) => {
  const hiddenIndex = progression.indexOf('..');
  const middleIndex = progression.length / 2;
  if (hiddenIndex >= middleIndex) {
    const [first, second] = progression;
    const progressionStep = second - first;
    const beforeHidden = progression[hiddenIndex - 1];
    return beforeHidden + progressionStep;
  }
  const middle = progression[middleIndex];
  const nextToMiddle = progression[middleIndex + 1];
  const progressionStep = nextToMiddle - middle;
  const nextToHidden = progression[hiddenIndex + 1];
  return nextToHidden - progressionStep;
};

export const taskForPlayer = 'What number is missing in the progression?';
