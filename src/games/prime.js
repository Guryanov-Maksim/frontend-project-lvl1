export default (num) => {
// Primality test using 6k+-1 optimization
  const firstPrimeInListOfPrimes = 2;
  const secondPrimeInListOfPrimes = 3;
  const modulus = 6;
  if (num <= secondPrimeInListOfPrimes) {
    return num > 1;
  }
  if (num % firstPrimeInListOfPrimes === 0 || num % secondPrimeInListOfPrimes === 0) {
    return false;
  }
  let primeOfForm = 5; // primeOfForm is an prime of the form 6k+-1
  while (primeOfForm ** 2 <= num) {
    if (num % primeOfForm === 0 || num % (primeOfForm + 2) === 0) {
      return false;
    }
    primeOfForm += modulus;
  }
  return true;
};
