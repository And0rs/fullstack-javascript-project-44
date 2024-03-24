import sayGreetings from '../src/cli.js';
import { questionAnswer, getRandom } from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const userName = sayGreetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  let rightAnswer = '';

  do {
    const number = getRandom(100 + 2);
    if (isPrime(number)) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    counter = questionAnswer(number, rightAnswer, userName, counter);
  } while (counter < 3 && counter !== 0);
};
