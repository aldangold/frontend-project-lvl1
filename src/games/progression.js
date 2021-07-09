import getRandomInRange from '../tools.js';
import buildMatch from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const getProgression = (startValue, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startValue + i * step);
  }
  return progression;
};

const hideElement = (array, index) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i !== index) {
      result[i] = array[i];
    } else {
      result[i] = '..';
    }
  }
  return result;
};

const game = () => {
  const startValue = getRandomInRange(0, 50);
  const step = getRandomInRange(1, 10);
  const progression = getProgression(startValue, step, lengthOfProgression);
  const hiddenIndex = getRandomInRange(0, progression.length - 1);
  const questionProgression = hideElement(progression, hiddenIndex);
  const correctAnswer = String(progression[hiddenIndex]);
  const question = questionProgression.join(' ');
  return [question, correctAnswer];
};

export default () => buildMatch(rulesOfGame, game);
