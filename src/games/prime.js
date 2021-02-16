import getRandomNumber from '../randomNumber.js';

const isPrime = (num) => {
  let devisor = 2;
  while (devisor < Math.sqrt(num)) {
    const remainder = num % devisor;
    if (remainder === 0) {
      return false;
    }
    devisor += 1;
  }
  return true;
};

export const getOneRandomNumber = () => getRandomNumber(1, 50);

export const checkPrimality = (num) => (isPrime(num) ? 'yes' : 'no');

export const getTaskForPlayer = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';
