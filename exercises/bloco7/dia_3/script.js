/* 
Começo da aula sobre assert

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.equal(50, 50); // Sem erros: 50 == 50
assert.equal(50, 70); // AssertionError: 50 == 70

const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.equal(expected, 3, 'Nove dividido por três é igual a três');
 */

const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(
  list1,
  list2,
  'Erro: list1 e list2 não são estritamente iguais'
);

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(
  person1,
  person2,
  'Erro: person1 e person2 não são estritamente iguais'
);

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(
  person1,
  person3,
  'Erro: os valores dos objetos são estritamente iguais'
);

const asert = require('assert');

const summationOf = (number) => {
  let summation = 0;

  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }
  return summation;
};

assert.strictEqual(summationOf(4), 10);
