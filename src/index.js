import readlineSync from 'readline-sync';

export const getRandom = (max) => {
  const randomInt = (Math.floor(Math.random() * max));
  return randomInt;
};

export const questionAnswer = (question, rightAnswer, userName, currentScore) => {
  let counter = currentScore;
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (rightAnswer === answer) {
    counter += 1;
    console.log('Correct!');

    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    counter = 0;
    console.log(`'${answer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`)
  }
  return counter;
};
