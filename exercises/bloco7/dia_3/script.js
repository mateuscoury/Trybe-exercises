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
/* const assert = require('assert');

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
 */
/* 
ex 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum('4', '5'), 9, 'Não e o resultado esperado');
 */
/* 
ex2

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.strictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
 */
/* const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

//assert.notStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]); */
/* const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//assert.strictEqual(myFizzBuzz(15), 'fizzbuzz'); divisivel por 3 e 5

//assert.strictEqual(myFizzBuzz(6), 'fizz');

//assert.strictEqual(myFizzBuzz(5), 'buzz');

//assert.strictEqual(myFizzBuzz(7), 7);

//assert.strictEqual(myFizzBuzz('zezinho'), 'false');
 */
/* const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.strictEqual(obj1, obj2); */
//throw new Error
/* const assert = require('assert');

const addOne = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(array[i] + 1);
  }
  return output;
};
//assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
//assert.deepStrictEqual(myArray, unchanged) */
