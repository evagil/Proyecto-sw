export default class Proyecto {
    imagen
    nombre
    descripcion

    constructor(imagen, nombre, descripcion) {
        this.imagen = imagen
        this.nombre = nombre
        this.descripcion = descripcion
    }

    obtenerElementoProyecto = () => {
        let divContenedor = document.createElement('div')
        let divDetalles = document.createElement('div')
        let imagenProy = document.createElement('img')
        let nombreProy = document.createElement('h3')
        let descripcionProy = document.createElement('p')

        divContenedor.classList.add('contenedorProy')
        divDetalles.classList.add('detallesProy')
        descripcionProy.innerHTML = this.descripcion
        nombreProy.innerHTML = this.nombre
        imagenProy.src = this.imagen
        imagenProy.alt = 'imagen proyecto ' + this.nombre
        imagenProy.classList.add('imagenProy')

        divDetalles.appendChild(nombreProy)
        divDetalles.appendChild(descripcionProy)
        divContenedor.appendChild(imagenProy)
        divContenedor.appendChild(divDetalles)

        return divContenedor
    }
}