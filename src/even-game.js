import readlineSync from 'readline-sync';
import sayGreetings from './cli.js';

const getRandom = () => {
  const max = 1000;
  const randomInt = (Math.floor(Math.random() * max));
  return randomInt;
};

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

export default () => {
  const userName = sayGreetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  do {
    const questNumber = getRandom();
    const rightAnswer = isEven(questNumber);
    const wrongAnswer = !isEven(questNumber);
    const answer = readlineSync.question(`Question: ${questNumber}\nYour answer: `);
    if (rightAnswer === answer) {
      counter += 1;
      console.log('Correct!');
    } else {
      counter = 0;
      console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer is '${rightAnswer}'.`);
    }
  } while (counter < 3 && counter !== 0);
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
