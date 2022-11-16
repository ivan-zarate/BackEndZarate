class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.mascotas = [],
        this.libros=[]
    }
    getFullName = () => {
        return (`El nombre es ${this.nombre} y el apellido es ${this.apellido}`)
    }
    addMascota = (mascota1, mascota2, mascota3) => {
        (
            this.mascotas.push(mascota1, mascota2, mascota3)
        )
    }
    countMascotas = () => {
        return (`La cantidad de mascotas ingresas es ${this.mascotas.length}`)
    }
    addBook = (libro1, libro2) => {
        (
            this.libros.push(libro1, libro2)
        )
    }
    getBookNames = () => {
        return (this.libros.map((el)=>
            el.Titulo
        ))
    }

}

module.exports = Usuario