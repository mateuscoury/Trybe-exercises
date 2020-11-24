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
  const arrayobj = Object.entries(objeto).length;
  console.log(arrayobj);
};
console.log(tamanhp(lesson3));
