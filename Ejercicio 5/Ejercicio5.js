'use strict'
  const LibroB = [
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
     
     const Ubicacionlibro = "You Don't Know JS";
     const Numerolibro = LibroB.indexOf(Ubicacionlibro);
     
     if (Numerolibro !== -1) {
       alert(`El libro "${Ubicacionlibro}" se encuentra en el estante numero ${Numerolibro}.`);
     } else {
       alert(`El libro "${Ubicacionlibro}" no se encontro en la biblioteca.`);
     }

    /* Definición del Array LibroB: Se crea un array llamado LibroB que contiene
      una lista de nombres de libros.
      Definición de la Variable Ubicacionlibro: Se crea una variable llamada Ubicacionlibro 
      que contiene el nombre del libro que se desea buscar en el estante.
      Búsqueda del Índice del Libro: Se utiliza el método indexOf del array para obtener el 
      índice del libro en el array LibroB. Si el libro no se encuentra, el método devuelve -1.
      Verificación del Resultado de la Búsqueda: Se utiliza una estructura condicional (if-else)
       para verificar si el índice obtenido (Numerolibro) es diferente de -1. Si es diferente, 
       significa que el libro se encuentra en el estante, y se muestra un mensaje con la ubicación del libro.
        En caso contrario, se muestra un mensaje indicando que el libro no se encontró en la biblioteca.