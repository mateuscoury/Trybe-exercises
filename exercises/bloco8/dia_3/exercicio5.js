
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((sum, name) => {
    return sum + name.split("").reduce((sumSplit, caracter) => {
      if (caracter === "a" || caracter === "A") {
        return sumSplit + 1;
      }
      return sumSplit;

    }, 0);

  }, 0)
}

assert.deepEqual(containsA(), 20);