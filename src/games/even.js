/* eslint-disable no-console */
export const rulesOfGame = 'Answer "yes" if number even otherwise answer "no".';

export const even = () => {
  const question = Math.round(Math.random() * 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};
