import capitalize from '../src/capitalize.js';

if (capitalize('hexlet!') !== 'Hexlet!') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены');
