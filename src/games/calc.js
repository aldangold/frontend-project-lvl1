import getRandomInRange from '../tools.js';
import buildMatch from '../index.js';

const rulesOfGame = 'What is the result of the expression?';

const add = (number1, number2) => number1 + number2;
const sub = (number1, number2) => number1 - number2;
const mul = (number1, number2) => number1 * number2;

const operations = [
  { operator: add, sign: '+' },
  { operator: sub, sign: '-' },
  { operator: mul, sign: '*' },
];

const game = () => {
  const numberOfOperator = getRandomInRange(0, operations.length - 1);
  const operation = operations[numberOfOperator];
  const number1 = getRandomInRange(0, 100);
  const number2 = getRandomInRange(0, 100);
  const question = `${number1} ${operation.sign} ${number2}`;
  const correctAnswer = String(operation.operator(number1, number2));
  return [question, correctAnswer];
};

export default () => buildMatch(rulesOfGame, game);
