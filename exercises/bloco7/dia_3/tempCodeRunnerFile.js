const assert = require('assert');

const addOne = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(array[i] + 1);
  }
  return output;
};
//assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);