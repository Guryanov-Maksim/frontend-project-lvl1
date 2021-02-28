import getRandomNumber from '../randomNumber.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 50);
  const evenness = (isEven(number) ? 'yes' : 'no');
  return [String(number), evenness];
};

export default [
  getQuestionAndAnswer,
  taskDescription,
];
