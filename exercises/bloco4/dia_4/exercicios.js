
/*  primeiro

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    
  };

  console.log("Bem Vinda" + " " + info.personagem)

  */

/* Segundo

 let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente : "Sim"
  };

*/


/* Terceiro

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorente : "Sim"
  };

  for (let key in info) {
      console.log(key)
  }

  */

 /* Quarto
 
  let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorente : "Sim"
  };

  for (let key in info) {
      console.log(info[key])
  }

*/

/* Quinto

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorente : "Sim"
}

let info1 = {
    personagem : "Tio Patinhas" ,
    origem : "Christmas on Bear Mountain,Dell's Four Color Comicas #178 " ,
    nota : "O último MacPatinhas" ,
    recorrente : "Sim"
}
console.log(info)

*/


/* Sexto

function verificaPalindrome(palavra) {
    let arrayLetras = palavra.split("");
    let isPalindrome = true;
    for (let index in arrayLetras) {
      if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }
  
  
  console.log(verificaPalindrome('arara')); 
  console.log(verificaPalindrome('desenvolvimento')); 

  */ 

/* Setimo


 function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4

  */


/* Indice menor

 function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 3, 6, 7, 10, 1])); //4


  */

  /* Maior nome 
  
  
  function bla (array) {

    let maior = array [0] ;
    
    for (let index in array) {
        if(maior.length < array[index].length) {
            maior = array[index ] ;
        }



    }



    return maior
  }

  console.log(bla(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

  */