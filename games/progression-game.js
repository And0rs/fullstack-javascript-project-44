import sayGreetings from '../src/cli.js';
import { questionAnswer, getRandom } from '../src/index.js';

export default () => {
  const userName = sayGreetings();
  console.log('What number is missing in the progression?');
  let counter = 0;

  do {
    const progression = [];
    const start = getRandom(90);
    const step = getRandom(10);
    const end = start + (step * 9);
    const hiddenNumber = getRandom(10);

    for (let i = start; i <= end; i += step) {
      progression.push(i);
    }

    const rightAnswer = progression[hiddenNumber];
    progression[hiddenNumber] = '..';
    const question = progression.join(' ');

    counter = questionAnswer(question, String(rightAnswer), userName, counter);
  } while (counter < 3 && counter !== 0);
};
