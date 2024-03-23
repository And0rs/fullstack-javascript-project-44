import sayGreetings from './cli.js';
import { questionAnswer, getRandom } from './index.js';

export default () => {
  const userName = sayGreetings();
  console.log('What number is missing in the progression?');
  let counter = 0;

  do {
    const progression = [];
    let start = getRandom(90);
    let step = getRandom(10);
    let end = start + (step * 9);
    let hiddenNumber = getRandom(10);

    for (let i = start; i <= end; i += step) {
      progression.push(i);
    }

    const rightAnswer = progression[hiddenNumber];
    progression[hiddenNumber] = '..';
    const question = progression.join(' ');

    counter = questionAnswer(question, String(rightAnswer), userName, counter);
  } while (counter < 3 && counter !== 0);
};
