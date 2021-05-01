
//Hola mundo
//alert('Soy JavaScript!');

//Comentarios

//comentarios en una linea
/*Comentatios
en mas de una
linea*/



//Sentencias

//alert('Hola'); alert('Mundo');

//alert('Hola');
//alert('Mundo');

//INSERCIÓN AUTOÁTICA DE PUNTO Y COMA

//alert('Hola')
//alert('Mundo')

//Variables

let mensaje;
mensaje="Hola mundo"
//alert(mensaje);

let a=5;
let b=8;
let suma = a +b;
console.log("El resultado es: ",suma);

let nombre ="Marco";
let nombre2=nombre;

nombre2="Antonio";

console.log("El nombre uno es: ",nombre);
console.log("El nombre dos es: ",nombre2);

// Nombrar variables con camel case

nombreUno ="Marco";
nombreDos="Antonio";

//Nombrar como underscore
nombre_uno="Marco";
nombre_dos="Antonio";

// nombres no comunes
let $=1;
let _=2;

//no puede nombrar variables

/*let 1a=2;
let primer-nombre="Marco";*/

"use strict"
//mensaje="Hola mundo";

//Constantes

const PI =3.141624;
const COLOR_ROJO = "#FFFFF";
pi_dos= PI;

console.log(PI);
console.log(pi_dos);

//Tipos de datos

//Dinámicamente

let mensaje_tres ="Hola";
mensaje_tres=12345

// Tipos de datos Número

let n = 123;
n = 12.456;


// Valores numéricos especiales Infinity, -Infinity y NaN

// Infinity: Representa el infinito matemático. Es un valor especial que es mayor que cualquier numero

console.log(1/0);
console.log(Infinity);

// NaN representa un error de calculo, es el resultado de una 
// oprecion incorrecta o indefinida

console.log("No es un numero"/2);

// NaN es pegajoso. Cualquier operación sobre NaN devuelve NaN

console.log("No es un numero"/2+5);

// Tipo de datos BigInt

// Valores enteros mayores que (2^53-1) o menor que (2^53-1)

let numero_grande =984654984664487897879854865446496846549646465494649464984446465;
console.log(numero_grande);

// Tipo String

let texto ="hola";
let texto_dos ='hola';
let texto_tres=``; //backticks funcionalidad extendidas
let nomb="Marco";
console.log("Hola ${nomb}");
console.log('Hola ${nomb}');
console.log(`Hola ${nomb}`);

// Tipo Booleano

// true y flase

let verdadero = true;
let falso=false;
let mayor=4>1;

// Valor null

// Valor especial que no pertenece a ningun tipo de dato anterior
// Forma un tipo propio separadp que contiene solo el valor null

let edad=null;
console.log(edad);

// en JS null NO significa un objeto no existente
// Es solo un valor especial que representa nada, vacio o valor desconocido

// Valor Undefined

// Valor especial que no pertenece a ningun tipo de dato anterior
// El significado de undefined es valor no asignado

let edad_dos;
console.log(edad_dos);

// El operador typeof o función typeof(x), devuelve el tipo de dato

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof "Hola");
console.log(typeof 10n);

