#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import askUser from '../src/cli.js';

const name = askUser();
const buildMatch = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  for (let i = 0; i < 3;) {
    const question = Math.round(Math.random() * 100);
    console.log(`Question: ${question}`);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

buildMatch();
