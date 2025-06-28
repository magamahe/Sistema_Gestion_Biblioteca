const usuarios = require("./01-lista_usuarios");
const libros = require("./01-lista_libros");

const { impresionTablaLibro,
        impresionTablaUsuario 
    } = require("./00-funciones_auxiliares");

// Punto 8: Manejo de cadenas

// a)- Crear una función normalizarDatos() que utilice métodos de strings para:
//  ✔Convertir todos los títulos a mayúsculas.
//  ✔Eliminar espacios en blanco al inicio y final de los nombres de autores.
//  ✔Formatear los emails de los usuarios a minúsculas.

const normalizarDatos = (array) => {
    // mapeo del array original para devolver uno nuevo sin modificar el original
    return array.map(elemento => {
        // verificar la existencia de claves titulo y autor en el elemento
        if ("titulo" in elemento && "autor" in elemento) {
            return {
                //copia del elemento
                ...elemento,
                titulo: elemento.titulo.toUpperCase(),
                autor: elemento.autor.trim()
            }

            // verificar la existencia de email en el elemento
        } else if ("email" in elemento) {
            return {
                // copia del elemento
                ...elemento,
                email: elemento.email.toLowerCase()
            }
        } else {
            // si el elemento no es ni un libro ni un usuario, se devuelve sin cambios
            return elemento;
        }
    })
}

//prueba
// const librosNormalizados = normalizarDatos(libros);
// const usuariosNormalizados = normalizarDatos(usuarios);

// impresionTablaLibro(librosNormalizados)
// impresionTablaUsuario(usuariosNormalizados)

module.exports = {
    normalizarDatos
}