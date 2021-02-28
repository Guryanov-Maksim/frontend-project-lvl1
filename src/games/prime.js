import getRandomNumber from '../randomNumber.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 50);
  const primality = (isPrime(number) ? 'yes' : 'no');
  return [String(number), primality];
};

export default [
  getQuestionAndAnswer,
  taskDescription,
];
