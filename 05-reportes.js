/* PUNTO 5: Reportes */

const { biblioteca } = require("./02-gestion_libro");

function generarReporteLibros(){
    const totalLibros = biblioteca.length; // calcula la cantidad total de libros existentes
    const librosPrestados = biblioteca.filter(libro => !libro.disponible).length; // calcular la cantidad de libros prestados
    const librosPorGenero = biblioteca.reduce((acc, libro) => {
                            acc[libro.genero] = (acc[libro.genero] || 0) + 1;
                            return acc;
    }, {}); // Calcula la cantidad de Libro por genero
    const libroMasAntiguo = biblioteca.reduce((acum, libro) => (acum.anio < libro.anio ? acum : libro));
    const libroMasNuevo = biblioteca.reduce((acum, libro) => (acum.anio > libro.anio ? acum : libro));

    //Reporte de Libros
    console.log("📚📋 REPORTE DE LIBROS 📋📚");
    console.log(`📘 Cantidad Total de libros: ${totalLibros}`);
    console.log(`📕 Cantidad de libros Prestados: ${librosPrestados}`);
    console.log(`📗 Cantidad de libros por Género:`);
    console.table(librosPorGenero);
    console.log(`📙 Libro más Antiguo: ${libroMasAntiguo.titulo} , 📅 Año: ${libroMasAntiguo.anio}`);
    console.log(`📒 Libro más Nuevo: ${libroMasNuevo.titulo}, 📅 Año: ${libroMasNuevo.anio}`);    
}

module.exports = {
    generarReporteLibros
};