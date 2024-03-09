import sayGreetings from './cli.js';
import questionAnswer from './index.js';

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
  const userName = sayGreetings(); // Приветствуем пользователя и запоминаем его имя
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  do {
    const question = getRandom();
    const rightAnswer = isEven(question);
    const wrongAnswer = !isEven(question);

    counter = questionAnswer(question, rightAnswer, wrongAnswer, userName, counter);
  } while (counter < 3 && counter !== 0);
};
