/* eslint-disable no-console */
export const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const gcdFunction = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcdFunction(num2, num1 % num2);
};

export const gcd = () => {
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcdFunction(number1, number2));
  return [question, correctAnswer];
};
