class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.mascotas = [],
            this.libros = []
    }
    getFullName = () => {
        return `El nombre es ${this.nombre} y el apellido es ${this.apellido}`
    }
    addPet = (mascota) => {
        for (let i in mascota) { this.mascotas.push(i) }
    }
    countPets = () => {
        return this.mascotas.length
    }
    addBook = (tituloIngresado, autorIngresado) => {

        let libro = {
            titulo: tituloIngresado,
            autor: autorIngresado
        }
        this.libros.push(libro)

    }
    getBookNames = () => {
        return this.libros.map((libro) =>
            libro.titulo
        )
    }
}

module.exports = Usuario