import sayGreetings from './cli.js';
import { questionAnswer, getRandom } from './index.js';

let start = 0;
let end = 0;
let step = 0;
let hiddenNumber = 0;

export default () => {
  const userName = sayGreetings();
  console.log('What number is missing in the progression?');
  let counter = 0;

  do {
    const progression = [];
    start = getRandom(90);
    step = getRandom(10);
    end = start + (step * 9);
    hiddenNumber = getRandom(10);

    for (let i = start; i <= end; i += step) {
      progression.push(i);
    }

    const rightAnswer = progression[hiddenNumber];
    progression[hiddenNumber] = '..';
    const question = progression.join(' ');

    counter = questionAnswer(question, String(rightAnswer), userName, counter);
  } while (counter < 3 && counter !== 0);
};
