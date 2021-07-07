import getRandomInRange from '../tools.js';

export const rulesOfGame = 'What is the result of the expression?';

const add = (number1, number2) => number1 + number2;
const sub = (number1, number2) => number1 - number2;
const mul = (number1, number2) => number1 * number2;

const operations = [
  { operator: add, sign: '+' },
  { operator: sub, sign: '-' },
  { operator: mul, sign: '*' },
];

const game = () => {
  const numberOfOperator = getRandomInRange(0, 2);
  const objOperation = operations[numberOfOperator];
  const number1 = getRandomInRange(0, 100);
  const number2 = getRandomInRange(0, 100);
  const question = `${number1} ${objOperation.sign} ${number2}`;
  const correctAnswer = String(objOperation.operator(number1, number2));
  return [question, correctAnswer];
};

export default game;
