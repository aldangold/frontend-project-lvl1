/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import askUser from './cli.js';

const buildMatch = (rulesOfGame, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = askUser('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  console.log(rulesOfGame);
  const numberOfMatches = 3;
  let counter = 0;
  while (counter < numberOfMatches) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = askUser();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default buildMatch;
