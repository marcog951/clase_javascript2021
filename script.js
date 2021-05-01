
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

//console.log("No es un numero"/2);

// NaN es pegajoso. Cualquier operación sobre NaN devuelve NaN

//console.log("No es un numero"/2+5);

// Tipo de datos BigInt

// Valores enteros mayores que (2^53-1) o menor que (2^53-1)

let numero_grande =984654984664487897879854865446496846549646465494649464984446465;
//console.log(numero_grande);

// Tipo String

let texto ="hola";
let texto_dos ='hola';
let texto_tres=``; //backticks funcionalidad extendidas
let nomb="Marco";
//onsole.log("Hola ${nomb}");
//console.log('Hola ${nomb}');
//console.log(`Hola ${nomb}`);

// Tipo Booleano

// true y flase

let verdadero = true;
let falso=false;
let mayor=4>1;

// Valor null

// Valor especial que no pertenece a ningun tipo de dato anterior
// Forma un tipo propio separadp que contiene solo el valor null

let edad=null;
//console.log(edad);

// en JS null NO significa un objeto no existente
// Es solo un valor especial que representa nada, vacio o valor desconocido

// Valor Undefined

// Valor especial que no pertenece a ningun tipo de dato anterior
// El significado de undefined es valor no asignado

let edad_dos;
//console.log(edad_dos);

// El operador typeof o función typeof(x), devuelve el tipo de dato

/*console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof "Hola");
console.log(typeof 10n);*/

// Interacciones: alert, prompt, confirm

// alert

//alert("Hola");

//prompt

//let nombre_capturado = prompt('Digite el nombre','Hola');

// confirm

confirm("¿Te gusta el helado?");

//CONVERSION DE TIPOS

// Existen dos tipos de conversiones explicita e implicita

//Convertir a String

let valor = true;
console.log(typeof valor);

valor= String(valor);
valor= String(false);
valor= String(null);
valor= String(undefined);
console.log(valor);
console.log(typeof valor);
    
// Convertir a numero

// Conversiones numericas que ocurren auntomaticamente en funsiones matematicas y expresiones

//alert('6'/'2');

let cadena="123";
let num_cad=Number(cadena);

console.log(Number('Hola'));

//Convertir a Boleano

console.log(Boolean("hola"));

// OPERADORES BASICOS

// Operadores unarios y binarios

a=4;
b=8;

res= a+b;
res=a-b;
res=a*b;
res=a/b;
res=a% b;
res=a**b;

//alert('1'+2); //12

//alert(2+2+'1'); //41
//alert('1'+2+2); //122

//Opreciones Unaria +

a=1;
console.log(+a);

a=-1;
console.log(+a);

console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);

a="2";
b="3";

console.log(+a + +b); 

//Opreciones Unaria -

a=1;
console.log(+a);

a=-1;
console.log(-a);

console.log(-true);
console.log(-false);
console.log(-NaN);
console.log(-undefined);
console.log(-null);

a="2";
b="3";

console.log(-a + +b); 

// ASIGNACIONES

a= 2+3;
a=b=c=2+3;
c=2+3;
b=c;
a=b;

a=3-(a=b+1);

// Incremente y Decremento

// ++
// --

// Posición del incremento o decremento

a=1;
b=++a;
console.log(b); //2

a=1;
b=a++;
c=a;
console.log(b);//1
console.log(c);//2

// COMPARACIONES

console.log ( 2>1) // true
console.log(2==1); //false
console.log(2!=1); // true

let resultado= 2>1;


// Comparaciones entre cadenas

console.log( 'Z' > 'A'); //true
console.log('showexxxx' > 'show'); //false
console.log('casa' > 'casas'); // false
console.log('a' > 'A');
console.log('carro' > 'cerro');

// 1. La letra minúscula es mayor que la mayúscula
// 2. La palabra con mas letras despues de pasar la primera condición es mayor que la de menos letras

// Comparación de diferentes tipos

// Al comparar valores de diferentes tipos, JS convierte lo valores a Números
// toda comparación con NaN es falsa.
// El undefined y el null en ls comparaciones de igualación no estrictas 
// actúan diferente: son iguales entre sí, pero no a ningún otro valor


a = 0;
b = '0';

boleano_a = Boolean(a); // false
boleano_b = Boolean(b); // true

console.log(a == b); // true

console.log('*************')
console.log('2' > 1); // true
console.log('01' == 1); // true
console.log(true > 0); // true
console.log(false == 0); // true

console.log('***** NaN ********')
// NaN
console.log('hola'> 0)// false
console.log('hola'< 0)// false
console.log('hola' == 0) // false

console.log('***** Undefined ********')
// Undefined
console.log(undefined > 0); //false
console.log(undefined < 0); // false

console.log('***** Null ********')
// null
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true

console.log('******* Null y Undefined == ******')
// El undefined y el null en las comparaciones de igualación no estrictas 
// actúan diferente: son iguales entre sí, pero no a ningún otro valor

console.log(null == undefined); // true
console.log(null == 5) // false
console.log(undefined == 5) // false

console.log('******* No diferencia de 0 de falso == ******')

console.log(0 == false); // true
console.log('' == false); // true

// Igualación Estricta

console.log(0 === false); // false
console.log( null === undefined); // false

/*
TABLA CONVERSIÓN NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/


// SENTENCIA IF

/*
if(condicion){
}else if(condicion){
}else{
}
*/


// if de línea
if(4 > 5) console.log('Mensaje');

if(4 > 5){
    b = 5+ 3;
    console.log('Mensaje');
}

/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

if('45a'/3){
    console.log('No entró');
}

if('0'){
    console.log('entró');
}

if(4/2){
    console.log('entró');
}

if (1){
    console.log('entró o no entró?');
}


let edadx;

if(edadx){
    console.log('Variable definida');
}else{
    console.log('Variable indefinida');
}

// Haga un algoritmo que dado una edad imprima true si es mayor de edad
// false si no lo es.

let edad_usuario = 17;
if(edad_usuario >= 18){
    console.log(true);
}else{
    console.log(false);
}

console.log(edad_usuario>= 18);

// Operador ternario

// condición ? operación verdadera : operación falsa;
resultado = edad_usuario >=18 ? x =5 : x=7;

// Operador lógico

// OR
/*
 v or v = v
 v or f = v
 f or v = v
 f or f = f
*/

console.log ('***** Opoerador OR ******');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

if ( 4 ==4 || 2 > 5){
    console.log('Verdadero');
}

// restulado = valor_uno || valor_dos || valor_tres;
// 1. Evalúa los operandos de izquierda a derecha.
// 2. Por cada operando, converte el valor a booleano. Si el resultado es true, 
// se detiene y retorna el valor original de ese operando.
// 3. Si todos los operandos han sido evaluados (todos eran falsos) retorna el último operando.

let comparacion_booleana = true || false || true; //true
comparacion_booleana = '0' || '0'; // '0'
comparacion_booleana = undefined || null || NaN || ''; // ''
comparacion_booleana = undefined || null || 3 || ''; // 3
comparacion_booleana = undefined || 'hola' || 3 || ''; // 'hola'

// Resumen: Devuelve el primer valor verdadero o el último si todos son falsos.


/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

// Operador lógico

// OR
/*
 v or v = v
 v or f = v
 f or v = v
 f or f = f
*/

console.log ('***** Opoerador AND ******');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

if ( 4 ==4 && 2 < 5){
    console.log('Verdadero');
}

// restulado = valor_uno || valor_dos || valor_tres;
// 1. Evalúa los operandos de izquierda a derecha.
// 2. Por cada operando, converte el valor a booleano. Si el resultado es false, 
// se detiene y retorna el valor original de ese operando.
// 3. Si todos los operandos han sido evaluados (todos eran verdaderos) retorna el último operando.

comparacion_booleana = true && false && true; //false
comparacion_booleana = '0' && '0'; // '0'
comparacion_booleana = undefined && null && NaN && ''; // undefined
comparacion_booleana = undefined && null && 3 && ''; // undefined
comparacion_booleana = undefined && 'hola' && 3 && ''; // undefined

// Resumen: Devuelve el primer valor falso o el último si todos son verdaderos.


/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

// PREVALENCIA U ORDEN ENTRE OR Y AND

// a && b || c && d == (a && b) || (c && d)

// Negación 

console.log(!true); //false
console.log(!false); // true
console.log(!!undefined); // false == Boolean(undefined)

// Nullish o Fusión de nulos

// restulado = valor_uno ?? valor_dos ?? valor_tres;
// 1. Evalúa los operandos de izquierda a derecha.
// 2. Por cada operando revisa si es null o undefined y regresa el primero que no sea
// ni null ni undefined.
// 3. Si todos los operandos han sido evaluados son nulos o undefined regresa el último.

a = null ?? undefined ?? undefined ?? null ?? "hola" ?? null ?? 'carlos'; // "hola"

a = undefined ?? undefined ?? undefined ?? null ?? null ?? null ; // null
