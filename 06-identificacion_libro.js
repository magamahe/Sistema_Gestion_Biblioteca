/* Punto 6: Identificación Avanzada de Libros */

const libros = require("./01-lista_libros.js");

function librosConPalabrasEnTitulo(){
    const resultado = libros
        .filter(libro => /^[a-zA-Z\s]+$/.test(libro.titulo) //filtra los libros cuyo título contiene solo letras y espacios 
        && libro.titulo.trim().split(" ").length > 1) //se asegura de que el título tenga más de una palabra
        .map(l => l.titulo); //Devuelve un nuevo array con solo los títulos de los libros que cumplieron la condición
    return resultado;
}

module.exports = {
    librosConPalabrasEnTitulo
};