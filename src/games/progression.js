import getRandomInRange from '../tools.js';
import buildMatch from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const getProgression = (lengthOfProgression = 10) => {
  const progression = [];
  const startValue = getRandomInRange(0, 50);
  const step = getRandomInRange(1, 10);
  for (let i = 0; i < lengthOfProgression; i += 1) {
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
  const progression = getProgression();
  const hiddenIndex = getRandomInRange(0, progression.length - 1);
  const questionArray = hideElement(progression, hiddenIndex);
  const correctAnswer = String(progression[hiddenIndex]);
  const question = questionArray.join(' ');
  return [question, correctAnswer];
};

export default () => buildMatch(rulesOfGame, game);
