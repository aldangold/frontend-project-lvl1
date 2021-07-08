import getRandomInRange from '../tools.js';
import buildMatch from '../index.js';

const rulesOfGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const game = () => {
  const question = getRandomInRange(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => buildMatch(rulesOfGame, game);
