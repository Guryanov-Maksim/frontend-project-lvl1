import getRandomNumber from '../randomNumber.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getOneRandomNumber = () => getRandomNumber(1, 50);

const checkEvenness = (num) => (isEven(num) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const number = getOneRandomNumber();
  const evenness = checkEvenness(number);
  return [String(number), evenness];
};

export default [
  getQuestionAndAnswer,
  taskDescription,
];
