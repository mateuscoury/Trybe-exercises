const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//1
const addNewKey = (obj, key, value) => {
  const ze = (obj[key] = value);
  console.log(ze);
};

addNewKey(lesson2, 'turno', 'manhã');
//2
const lista = (objeto) => {
  const listaobj = Object.keys(objeto);
  console.log(listaobj);
};
console.log(lista(lesson3));
//3

const tamanhp = (objeto) => {
  const arrayobj = Object.keys(objeto).length;
  console.log(arrayobj);
};
console.log(tamanhp(lesson3));

//4

const valoresobj = (objeto) => {
  const listavalores = Object.values(objeto);
  console.log(listavalores);
};
console.log(valoresobj(lesson3));

//5
//lembrar das chaves

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
//6
const numerot = (obj) => {
  //pegando o objeto de cima
  let total = 0; //definindo o total inicial para incrementar no loop
  const array = Object.keys(obj); //pegando os keys
  console.log(array);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes; // objeto na posicao lessons com o parametro de numeroestudantes
  }
  return total;
};
console.log(numerot(allLessons));

const getvalor = (obj, chave) => {
  const valor = Object.values(obj)[chave];
  console.log(valor);
};
console.log(getvalor(lesson1, 1));
