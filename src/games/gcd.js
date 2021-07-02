/* eslint-disable no-console */
export const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

export const game = () => {
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};
