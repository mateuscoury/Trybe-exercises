const obj = {
  name: 'Mateus',
  sobrenome: 'Coury',
};
console.log(`Olá meu nome é ${obj.name} e meu sobrenome é ${obj.sobrenome}`); //literal

let array = [2, 1, 4, 5, 3, 1, 7, 8, 9];

let arraytostring = array.join(','); //array to string

let stringtoaray = arraytostring.split(','); //string to array

let zezin = stringtoaray.sort(); //sort array

let maximo = Math.max(...zezin); //spread com o array de parametro

console.log(maximo);

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

console.log(Object.keys(student1)); //sintaxe nova object.keys()

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};
console.log(Object.keys(student2));
const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (i in arrayOfSkills) {
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

const obje = {
  name: 'Mateus',
  sobrenome: 'Coury',
  profissao: 'estudante',
};

let values = Object.values(obje); //pega os valores da chave do objeto

let keyss = Object.keys(obje); // pega as chaves dos objetos

console.log(values);

console.log(keyss);
