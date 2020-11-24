const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};
/* const customerInfo = (order) => {
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(
    `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`
  );
}; 

customerInfo(order); */

const orderModifier = (order) => {
  const newBuyer = (order.name = 'Luiz Silva');
  const pizzas = Object.keys(order.order.pizza);
  console.log(pizzas);
  const drinks = order.order.drinks.coke.type;
  const newTotal = (order.payment.total = '50');

  console.log(
    `Olá ${newBuyer}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal},00.`
  );
};

orderModifier(order);

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

//7

const getvalor = (obj, chave) => {
  const valor = Object.values(obj)[chave];
  console.log(valor);
};
console.log(getvalor(lesson1, 1));

//8
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));
