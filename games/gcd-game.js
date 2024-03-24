import sayGreetings from '../src/cli.js';
import { questionAnswer, getRandom } from '../src/index.js';

let lowerNumber = 0;
let higherNumber = 0;

const sortPair = (firstNumber, secondNumber) => {
  if (firstNumber > secondNumber) {
    higherNumber = firstNumber;
    lowerNumber = secondNumber;
  } else {
    higherNumber = secondNumber;
    lowerNumber = firstNumber;
  }
};

export default () => {
  const userName = sayGreetings();
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  let rightAnswer = 0;

  do {
    const firstNumber = getRandom(100);
    const secondNumber = getRandom(100);
    sortPair(firstNumber, secondNumber);
    const question = `${firstNumber} ${secondNumber}`;

    while (lowerNumber !== 0) {
      const tempNum = lowerNumber;
      lowerNumber = higherNumber % lowerNumber;
      higherNumber = tempNum;
      rightAnswer = higherNumber;
    }

    counter = questionAnswer(question, String(rightAnswer), userName, counter);
  } while (counter < 3 && counter !== 0);
};
