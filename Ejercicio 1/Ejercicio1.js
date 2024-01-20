'use strict'
let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
let nombre = prompt("Escriba su nombre")
alert(students.includes(nombre))

/* Definición del Array students: Se crea un array llamado students 
que contiene una lista de nombres de estudiantes.
Solicitud de Entrada del Usuario: Se utiliza la función prompt para solicitar al
 usuario que ingrese su nombre. El valor ingresado por el usuario se almacena en la variable nombre.
 Verificación de la Presencia del Nombre en el Array: Se utiliza el método includes del array para verificar
  si el nombre ingresado (nombre) está presente en el array students.
   El método devuelve true si el nombre está presente y false si no lo está.
   Alerta con el Resultado: Se utiliza la función alert para mostrar un mensaje al usuario. El mensaje indica si 
   el nombre ingresado está presente en el array o no, según el resultado de la verificación anterior.