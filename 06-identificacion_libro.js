/* Punto 6: Identificación Avanzada de Libros */
const {
  biblioteca
} = require("./02-gestion_libro.js");

//const libros = require("./01-lista_libros.js");

///^[a-zA-ZÀ-ÿ\s]+$/i
//    El regex /^[a-zA-ZÀ-ÿ\s]+$/i hace eso:
        //      - ^ y $ indican que toda la cadena debe coincidir con el patrón
        //      - a-zA-Z: letras básicas mayúsculas y minúsculas
        //      - À-ÿ: incluye letras con acentos y caracteres especiales en el rango Latin-1 (ñ, á, é, í, ó, ú, ü, etc.)
        //      - \s: espacios
        //      - +: uno o más caracteres válidos
        //      - i: flag para ignorar mayúsculas/minúsculas
        
function librosConPalabrasEnTitulo() {
    return biblioteca
        .filter(libro => /^[a-zA-ZÀ-ÿ\s]+$/i.test(libro.titulo) && libro.titulo.trim().split(" ").length > 1) // Filtra libros con títulos válidos y más de una palabra
        .map(l => l.titulo); // Extrae solo los títulos de los libros filtrados que cumplen la condición
}
module.exports = {
    librosConPalabrasEnTitulo
};
