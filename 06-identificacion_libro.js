/* Punto 6: Identificación Avanzada de Libros */

const libros = require('./listaLibros.js');

function librosConPalabrasEnTitulo(){
    const resultado = libros
        .filter(libro => /^[a-zA-Z\s]+$/.test(libro.título) //filtra los libros cuyo título contiene solo letras y espacios 
        && libro.título.trim().split(" ").length > 1) //se asegura de que el título tenga más de una palabra
        .map(l => l.título); //Devuelve un nuevo array con solo los títulos de los libros que cumplieron la condición
    console.log(resultado);
    return resultado;
}

module.exports = {
    librosConPalabrasEnTitulo
};