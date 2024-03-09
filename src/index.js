import readlineSync from 'readline-sync';

export default (question, rightAnswer, wrongAnswer, userName, currentScore) => {
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
  }
  return counter;
};
