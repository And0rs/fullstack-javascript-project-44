import sayGreetings from '../src/cli.js';
import { questionAnswer, getRandom } from '../src/index.js';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

export default () => {
  const userName = sayGreetings(); // Приветствуем пользователя и запоминаем его имя
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  do {
    const question = getRandom(1000);
    const rightAnswer = isEven(question);

    counter = questionAnswer(question, rightAnswer, userName, counter);
  } while (counter < 3 && counter !== 0);
};
