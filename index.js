const Usuario = require("./constructor")

let mascota1="gato";
let mascota2="perro";
let mascota3="loro";
let libro1={Titulo:"El señor de los anillos", autor:"Tolkien"};
let libro2={Titulo:"Harry Potter", autor:"Rowling"};
const usuario= new Usuario("Ivan", "Zarate")
console.log(usuario.getFullName());
usuario.addMascota(mascota1, mascota2, mascota3);
console.log(usuario.countMascotas())
usuario.addBook( libro1, libro2);
console.log(`Los titulos de los libros ingresados son: ${usuario.getBookNames()}`)

