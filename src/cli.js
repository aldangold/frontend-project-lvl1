import readlineSync from 'readline-sync';

const askUser = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export default askUser;
