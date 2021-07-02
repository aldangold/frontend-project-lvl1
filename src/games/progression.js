/* eslint-disable no-console */
export const rulesOfGame = 'What number is missing in the progression?';

export const game = () => {
  const startValue = Math.round(Math.random() * 50);
  const step = Math.ceil(Math.random() * 10);
  const lengthOfProgression = 10;
  const hiddenIndex = Math.round(Math.random() * (lengthOfProgression - 1));
  const progression = [];
  let correctAnswer;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i !== hiddenIndex) {
      progression.push(startValue + i * step);
    } else {
      progression.push('..');
      correctAnswer = String(startValue + i * step);
    }
  }
  const question = progression.join(' ');
  return [question, correctAnswer];
};
