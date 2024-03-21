import sayGreetings from './cli.js';
import { questionAnswer, getRandom } from './index.js';

export default () => {
  const userName = sayGreetings();
  console.log('Find the greatest common divisor of given numbers.');
  let lowerNumber = 0;
  let higherNumber = 0;
  let counter = 0;
  let rightAnswer = 0;
  
  do {
    const firstNumber = getRandom(100);
    const secondNumber = getRandom(100);
    const question = `${firstNumber} ${secondNumber}`;

    if (firstNumber > secondNumber) {
      higherNumber = firstNumber;
      lowerNumber = secondNumber;
    } else {
      higherNumber = secondNumber;
      lowerNumber = firstNumber;
    };

    while (lowerNumber !== 0) {
      let tempNum = lowerNumber;
      lowerNumber = higherNumber % lowerNumber;
      higherNumber = tempNum;
      rightAnswer = higherNumber;
    }

    counter = questionAnswer(question, String(rightAnswer), userName, counter);
  } while (counter < 3 && counter !== 0);

}
