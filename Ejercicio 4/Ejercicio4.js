'use strict'
const Librosbiblioteca = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language"
  ];
  
  let tituloIngresado = prompt("Ingrese un título:");
 
  if ( Librosbiblioteca.includes(tituloIngresado)) {
    alert("El título ingresado se encuentra en la lista de libros de programación.");
  } else {
    alert("El título ingresado no se encuentra en la lista de libros de programación.");

    /*Definición del array Librosbiblioteca:
    Aquí se define una constante llamada Librosbiblioteca que contiene una lista de títulos 
    de libros de programación. Es un array que incluye nombres de libros como cadenas de texto.

Captura del título ingresado por el usuario:
 Se utiliza la función prompt para mostrar una ventana emergente que solicita al usuario ingresar un título.
  La entrada del usuario se guarda en la variable tituloIngresado.

Verificación de la presencia del título en la lista: