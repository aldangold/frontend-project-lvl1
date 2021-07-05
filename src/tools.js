const getRandomInRange = (min = 0, max = 100) => {
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInteger;
};

export default getRandomInRange;
