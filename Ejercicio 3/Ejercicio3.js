'use strict'

let frase = 'La programación web es fundamental para el progreso';
let palabras = frase.split(' ');
let cuentapalabras = palabras.filter(function(palabras) {
  return palabras.length > 3;
});
alert(cuentapalabras)
/*Definición de la Frase: Se crea una variable llamada frase que contiene 
una cadena de texto que representa una frase.
División de la Frase en Palabras: Se utiliza el método split de las cadenas 
de JavaScript para dividir la cadena frase en un array de palabras. La función split(' ')
 divide la cadena en cada espacio en blanco, creando así un array donde cada elemento es una palabra.
 Filtrado de Palabras por Longitud: Se utiliza el método filter del array para crear un nuevo array llamado cuentapalabras. 
 El método filter toma una función de callback que se aplica a cada elemento del array. En este caso, la función de callback devuelve 
 true solo para aquellas palabras cuya longitud (palabras.length) es mayor que 3.
 Después de esta línea de código, cuentapalabras contendrá solo aquellas palabras de la frase que tienen más de 3 caracteres.

Alerta con el Resultado: Se utiliza la función alert para mostrar un mensaje al usuario. El mensaje indica las palabras filtradas (aquellas con más de 3 caracteres) 
mediante la variable cuentapalabras.