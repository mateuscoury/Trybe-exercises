
/* exercicio 1

let numero = 5;


let horizontais = "" ;
let total ;
let simbolo = "*"

for(let i = 0 ; i < numero ; i ++){


horizontais = horizontais + simbolo ;

}

for (let u = 0 ; u < numero ; u ++) {

    console.log(horizontais)
}

*/


/*  Segundo exercicio

let n = 5 

let simbolo = "*" ;
let input = "" ;
let index ;

for (index = 0 ; index < n ; index ++){

    input = input + simbolo 

console.log(input)
}

*/

/*  Exercicio 3


let n = 5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};

*/