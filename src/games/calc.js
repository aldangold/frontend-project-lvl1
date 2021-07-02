/* eslint-disable no-eval */
/* eslint-disable no-console */
export const rulesOfGame = 'What is the result of the expression?';

export const game = () => {
  const mathOperatorsList = ['+', '-', '*'];
  const numberOfOperator = Math.round(Math.random() * 2);
  const sign = mathOperatorsList[numberOfOperator];
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = String(eval(question));
  return [question, correctAnswer];
};
