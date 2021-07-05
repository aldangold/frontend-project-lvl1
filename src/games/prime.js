import getRandomInRange from '../tools.js';

export const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question < 2) {
    return false;
  } if (question === 2) {
    return true;
  }
  const limit = Math.sqrt(question);
  for (let i = 2; i <= limit; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

export const game = () => {
  const question = getRandomInRange(0, 200);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
