import getRandomInRange from '../tools.js';

export const rulesOfGame = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const question = getRandomInRange(0, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default game;
