/* PUNTO 5: Reportes */


const libros = require("./01-lista_libros.js");

function generarReporteLibros(){
    const totalLibros = libros.length; // calcula la cantidad total de libros existentes
    const librosPrestados = libros.filter(libro => !libro.disponible).length; // calcular la cantidad de libros prestados
    const librosPorGenero = libros.reduce((acc, libro) => {
                            acc[libro.genero] = (acc[libro.genero] || 0) + 1;
                            return acc;
    }, {}); // Calcula la cantidad de Libro por genero
    const libroMasAntiguo = libros.reduce((acum, libro) => (acum.año < libro.año ? acum : libro));
    const libroMasNuevo = libros.reduce((acum, libro) => (acum.año > libro.año ? acum : libro));

    //Reporte de Libros
    console.log("📚📋 REPORTE DE LIBROS 📋📚");
    console.log(`📘 Cantidad Total de libros: ${totalLibros}`);
    console.log(`📕 Cantidad de libros Prestados: ${librosPrestados}`);
    console.log(`📗 Cantidad de libros por Género: ${librosPorGenero}`);
    console.log(`📙 Libro más Antiguo: ${libroMasAntiguo.título} , 📅 Año: ${libroMasAntiguo.año}`);
    console.log(`📒 Libro más Nuevo: ${libroMasNuevo.título}, 📅 Año: ${libroMasNuevo.año}`);    
}

module.exports = {
    generarReporteLibros
};