
let  readlineSync = require('readline-sync');

let alejo = readlineSync.question(`1 para sumar \n 2 para multiplicar ` )


switch (alejo) {
    case "1":
         let alejito = readlineSync.question( " Que Valor quieres Escribir ");
         let miguelito = readlineSync.question(" Digita el otro valor ");
         let res = alejito + miguelito 
         console.log( "el resultado es  :" ,  res) 
        break;

     case "2":
        let migue = readlineSync.question( " Que Valor quieres Escribir ");
        let  ale = readlineSync.question(" Digita el otro valor ");
        
        let resultado = ale * migue
        console.log( " el resltaado es : " , resultado); 
        break; 

    default:
        console.log (" Gracias Estiviste genial :) ")
        
        break;
}

