import Proyecto from "./proyecto.js";

// Proyectos
const proyectoAppRegistro = new Proyecto('../adjuntos/informática1.jpg', 'Aplicacion de Registro', 'Creamos una aplicacion para registrarse.')
const proyectoAppTiendaOnline = new Proyecto('../adjuntos/informatica2.jpg', 'Tienda Online', 'Creamos una aplicacion de una tienda online.')
const proyectoAppMensajeria = new Proyecto('../adjuntos/informatica3.jpg', 'Aplicacion de Mensajeria', 'Creamos una aplicacion para mandar mensajes.')

let proyectos = [proyectoAppRegistro, proyectoAppTiendaOnline, proyectoAppMensajeria]
let articuloDeProyectos = document.getElementById('proyectos')

for(let proyecto of proyectos) {
  articuloDeProyectos.appendChild(proyecto.obtenerElementoProyecto())
}