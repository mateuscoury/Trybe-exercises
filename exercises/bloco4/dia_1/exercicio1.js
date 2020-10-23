/*  Primeiro exercicio

let a = 5;
let b = 2;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b) ;
 
console.log(a % b) ;

*/

/* Segundo exercicio

let a = 15 ;
let b = 16 ;

if(a > b){
    console.log(a) ;
}
else{
    console.log(b); 
}
*/

/*  Terceiro exercicio

let a = 2 ;
let b = 5 ;
let c = 4 ;


if (a > b && a > c ) {
    console.log("a e maior")
}
else if (b > a && b > c) {
    console.log("b e maior")
}
else if( c > b && c > a) {
    console.log("c e maior")
}

*/

/* Quarto ex

let a = -25

if ( a > 0) {
    console.log("valor positivo") ;
}
else if(a < 0){
    console.log("valor negativo") ;
}
else {
console.log("zero")
}

*/

/*

let nomedapeca = "B";



switch (nomedapeca) {
   case "a":
       console.log("diagonal");
       break;

   case "b":
       console.log("avancar")

       break;

   case "c":
       console.log("qualquer direcao")
       break;

       default :
       console.log("nao existe") ;
       

}

*/

/*

let nota =  -89

if (nota >= 90 && nota < 100) {
    console.log("A")
}

    else if (nota >= 80 && nota < 90) {
        console.log("B")
    }
        else if (nota >= 70 && nota < 80) {
            console.log("C")
        } 
            else if (nota >= 60 && nota < 70) {
                console.log("D");
            }
                else if (nota >= 50 && nota < 60) {
                    console.log("E");
                }
                    else if (nota < 50 && nota > 0) {
                        console.log("F");
                    }
                        else if ( nota < 0 || nota > 100) {
                            console.log("ERROR") ;
                        }
   



*/

/*


let a = 5 ;

let b = 1; 

let c = 19 ;





if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ) {
    console.log("true")
}
    else {
        console.log("false") ;
    }
 


*/

/*

let a = 4 ;

let b = 10; 

let c = 12 ;





if(a % 2 == 1 || b % 2 == 1 || c % 2 == 1 ) {
    console.log("true")
}
    else {
        console.log("false") ;
    }
 


*/

/*
let a = 10  ;
let imposto = a * 0.2
let b = 20 ;
let valorlucro = b - ( a + imposto) ;

if( a && b <  0){
    console.log("ERRO") ;
}


console.log(valorlucro * 1000)
*/

let salario = 1200.0 ;
let inss  ;
let ir ;
let resultado = salario - (inss + ir)

if(salario <= 1556.94) {
    inss = salario * 0.8
}
else if(salario >= 1556.95 && salario <= 2594.92 ){
    inss = salario * 0.9
}
else if (salario >= 2594.93 && salario <= 5189.92){
    inss = salario * 0.11
}
else if (salario > 5189.82){
    inss = 570.88
}



if(salario <= 1903.98) {
    ir = 5
}

else if(salario >= 1903.99 && salario <= 2826.65 ){
    ir = salario 
}



console.log (resultado) ;