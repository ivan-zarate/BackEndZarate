const Usuario = require("./constructor")

let mascotas=["Gato", "Perro", "Loro"];
let titulo= ["El señor de los anillos", "Harry Potter"];
let autor=["Tolkien", "Rowling"];
const usuario= new Usuario("Ivan", "Zarate")
console.log(usuario.getFullName());
usuario.addPet(mascotas);
console.log(usuario.countPets())
usuario.addBook(titulo, autor);
console.log(`Los titulos de los libros ingresados son: ${usuario.getBookNames()}`)

