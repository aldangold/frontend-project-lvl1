/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';

const askUser = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export default askUser;
