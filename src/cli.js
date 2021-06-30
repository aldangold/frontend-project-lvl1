/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';

const askUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default askUser;
