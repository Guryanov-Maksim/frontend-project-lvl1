import getRandomNumber from '../randomNumber.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let devisor = 2;
  while (devisor <= Math.sqrt(num)) {
    const remainder = num % devisor;
    if (remainder === 0) {
      return false;
    }
    devisor += 1;
  }
  return true;
};

const getOneRandomNumber = () => getRandomNumber(1, 50);

const checkPrimality = (num) => (isPrime(num) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const number = getOneRandomNumber();
  const primality = checkPrimality(number);
  return [String(number), primality];
};

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default [
  getQuestionAndAnswer,
  taskDescription,
];
