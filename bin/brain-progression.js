#!/usr/bin/env node

import runGame, { getRandomNumber } from '../src/index.js';

const task = 'What number is missing in the progression?';

const makeProgression = () => {
  const firstElement = getRandomNumber(1, 30);
  const step = getRandomNumber(1, 15);
  const progressionLength = 10;
  const progression = [firstElement];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const getQuestion = () => {
  const position = getRandomNumber(1, 10);
  const progression = makeProgression();
  const progressionWithHiddenEl = progression.map((item, index) => (
    index === position ? '..' : item
  ));
  return progressionWithHiddenEl.join(' ');
};

const getHiddenElement = (progressionStr) => {
  const progression = progressionStr
    .split(' ')
    .map((item) => (item === '..' ? '..' : Number(item)));
  const hiddenIndex = progression.indexOf('..');
  const middleIndex = progression.length / 2;
  if (hiddenIndex >= middleIndex) {
    const [first, second] = progression;
    const step = second - first;
    const beforeHidden = progression[hiddenIndex - 1];
    return beforeHidden + step;
  }
  const middle = progression[middleIndex];
  const nextToMiddle = progression[middleIndex + 1];
  const step = nextToMiddle - middle;
  const nextToHidden = progression[hiddenIndex + 1];
  return nextToHidden - step;
};

const isWrongAnswer = (playerAnswer, correctAnswer) => playerAnswer !== correctAnswer.toString();

runGame(getQuestion, getHiddenElement, isWrongAnswer, task);
