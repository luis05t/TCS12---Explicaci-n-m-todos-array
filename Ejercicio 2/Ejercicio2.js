'use strict'
let frase = 'La programación web es fundamental para el progreso';
let palabra = frase.split(' ');
let palabrastine = palabra.length;
alert('La frase tiene ' + palabrastine + ' palabras.');

/* Definición de la Frase: Se crea una variable llamada frase que contiene
 una cadena de texto que representa una frase.
División de la Frase en Palabras: Se utiliza el método split de las cadenas 
de JavaScript para dividir la cadena frase en un array de palabras. La función 
split(' ') divide la cadena en cada espacio en blanco, creando así un array donde 
cada elemento es una palabra.
Después de esta línea de código, palabra será un array que contiene todas las palabras de la frase.

Conteo de Palabras: Se utiliza la propiedad length del array para obtener el número de elementos en el array,
 que corresponde al número de palabras en la frase. El resultado se almacena en la variable palabrastine.
 Alerta con el Resultado: Se utiliza la función alert para mostrar un mensaje al usuario. El mensaje indica cuántas
  palabras tiene la frase, utilizando la variable palabrastine.