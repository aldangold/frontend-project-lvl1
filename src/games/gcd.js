import getRandomInRange from '../tools.js';

export const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const game = () => {
  const number1 = getRandomInRange(0, 100);
  const number2 = getRandomInRange(0, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

export default game;
