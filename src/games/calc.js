/* eslint-disable no-eval */
import getRandomInRange from '../tools.js';

export const rulesOfGame = 'What is the result of the expression?';

export const game = () => {
  const mathOperatorsList = ['+', '-', '*'];
  const numberOfOperator = getRandomInRange(0, 2);
  const sign = mathOperatorsList[numberOfOperator];
  const number1 = getRandomInRange(0, 100);
  const number2 = getRandomInRange(0, 100);
  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = String(eval(question));
  return [question, correctAnswer];
};
