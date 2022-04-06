// asignar el valor de una variable a otra variable //
var a = 5;
var b = a;

console.log (a);
 console.log (b);
 // Donde dará 5 , 5 porque a vale 5 y a asignó el valor 5 a b //

// Otra altenativa es : //
var a = 5;
var b;

b = a;
console.log (a);
console.log (b);
// Da tambien 5 , 5 respectivamente porque la variable a vale 5 y la variable b tiene asignado por 
//a el valor 5 //
// Inicializar variables //
var x = 9; // Cuando asignamos un valor a una variable.Estamos dando a la vez el nombre de nuestro Programa
//a la vez Estamos declarando la variable..esto se llama inicializar la variable//

var miIdioma = "español"; // miIdioma es una nomenclatura de JS 
//llamada camelcase por paracerse a las jorabas del camello,
// tambien puede escribirse de este modo mi_idioma pero es preferible de la primera forma//
// Variables No Inicializadas //

var a; // Var No Inicializada porque no se dió un valor //
var b;

console.log (a); // da undefine ..indefinido //
  a = 56; // var inicilizada el valor de (a) es 56 //
  console.log (a);
  // 56 //
  // Mayúsculas y Minúsculas //
  // Una Mayúscula no es = a una Minúcula //
  var miVariable = 5;

  // Todas las siguientes formas de asignar son Error //
   console.log (MIVARIABLE); Es Error //
   console.log (Mivariable); Es Error //
   console.log (mivariable); Es Error //

  // La forma correcta es como definimos la var. al principio //
  // console.log var (miVariable) = 5; //
  // 5 // 
  //esto se denomina Case-sensitive ,Js es sensible a Mayus y Minus//
  // Operaciones Aritméticas en JVS //
  //   Suma  //
  var suma = 7 + 12;
  console.log (suma);
  // resultado 19 //
  var resta = 15 - 5;
console.log (resta);
// el resultado es 10 un resultado Positivo //
// Actualizar el valor de la var. resta a un valor negativo //
resta = 5 - 15;
console.log (resta);
// el resultado es -10 es resultado Negativo //
resta = 15 - 15;
0 // resultado es cero //
// Multiplicacion //
var producto = 5 * 3;
console.log (producto);
15 // resutado //
producto = 9 * 0;
console.log (producto);
0 // resultado //
producto = 5 * -6;
console.log (producto);
-30 // resultado negativo //
// División //
var cociente = 20 / 2;
console.log (cociente);
10 
cociente = 17 / 31;
console.log (cociente);
0.54
cociente = 3 / 0;
console.log (cociente);
infinito // es el resultado //

// Multiplicar Números Decimales //

var miNumeroDecimal = 23.4;
// el punto nos dice que es un número decimal //

var peso = 78.34;

// Multiplicación de Números Decimales //
var producto = 34.4 * 10.4;
console.log (producto);
// resultado es // 
357.76

// Actualizamos la var para mas Ej: de como se opera con este
// tipo de datos //

producto = 2.4 * 4;
console.log (producto);
// resultado es //
 9.6

 // Console.log (producto); I

 producto = 6 * 8.9;
 console.log (producto);
53.4  // el resultado es 53.4 pero la computadora lo redondea y lo pone aproximado 53.400000000000006 pues no puede dar un número finito //

producto = 3.6 * 0;
console.log (producto);
0 // es el resultado //

producto = -5.7 * 3.4;
console.log (producto);
-19.38 // es el resultado que da un número negativo //

// Dividir números Decimales //

var cociente = 5.0 / 2.0;
// se debe colocar el cero despues del punto pues indica que es número decimal de lo contrario seria un numero entero 2
console.log (cociente);
2.5 // es el resultado

// Actualizar var

cociente = 2.3 / 6.7;
console.log (cociente);
0.34328358208955223 // es el resultado

cociente = 4.2 / 0.0;
console.log (cociente);
//infinty ó infinito // es el resultado

// Resto de una división

// esto verifica si un número es par o impar //

var resto = 15 % 5;
console.log (resto);
0 // el resultado

// Actualizar var

resto = 5 % 1;
console.log (resto);
0 // el resultado

resto = 5 % 2;
console.log (resto);
1 // el resultado

// Incrementar el valor de una variable

var librosComprados = 105;

// Hay dos Opciones para incrementar la var librosComprados 

// Opción 1 
librosComprados = 105;
 librosComprados = librosComprados + 1;
 console.log (librosComprados);
 // el 1 asigna a la var librosComprados a la izquierda 
 //del + que tiene el valor 105 y suma 1 este valor se asigna a 
 //la variable que está antes del signo = //

 // Opción 2

 librosComprados++;
  console.log (librosComprados);
  106 // es el valor
  // Los ++ indican en JVS que se incrementa en 1 el valor  de la 
  //variable


