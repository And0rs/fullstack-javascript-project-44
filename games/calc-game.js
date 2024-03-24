import sayGreetings from '../src/cli.js';
import { questionAnswer, getRandom } from '../src/index.js';

const expressions = ['+', '-', '*'];

export default () => {
  const userName = sayGreetings();
  console.log('What is the result of the expression?');
  let counter = 0;
  do {
    const randomIndex = getRandom(3);
    const randomExpression = expressions[randomIndex];
    const firstNumber = getRandom(100);
    const secondNumber = getRandom(100);
    const question = `${firstNumber} ${randomExpression} ${secondNumber}`;
    let rightAnswer = 0;

    switch (randomExpression) {
      case '+':
        rightAnswer = firstNumber + secondNumber;
        break;
      case '-':
        rightAnswer = firstNumber - secondNumber;
        break;
      default:
        rightAnswer = firstNumber * secondNumber;
        break;
    }

    counter = questionAnswer(question, String(rightAnswer), userName, counter);
  } while (counter < 3 && counter !== 0);
};
