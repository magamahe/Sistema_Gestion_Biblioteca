// Punto 7: Cálculos estadísticos

// a)- Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
//  ✔Promedio de años de publicación de los libros.
//  ✔Año de publicación más frecuente.
//  ✔Diferencia en años entre el libro más antiguo y el más nuevo.

// const biblioteca = require("./02-gestion_libro");

const calcularEstadisticas = (array) => {
    // ver si hay libros en la biblioteca
    if (array.length === 0) {
        return {
            totalLibros: 0,
            anioPromedio: 0,
            tablaFrecuenciaAnios: [],
            libroMasAntiguo: null,
            libroMasNuevo: null,
            diferencia: 0
        };
    }

    //Promedio de año de publicacion -> sumar todos los años y dividir por cantidad de libros

    const valorActual = {
        sumaAnios: 0,
        frecuenciaAnios: {},
        libroMasAntiguo: array[0],
        libroMasNuevo: array[0],
    }

    const estadisticas = array.reduce((acumulador, elemento) => {
        // suma de años
        acumulador.sumaAnios += elemento.anio;

        //libro más antiguo
        if (elemento.anio < acumulador.libroMasAntiguo.anio) {
            acumulador.libroMasAntiguo = elemento;
        }

        //libro más nuevo 
        if (elemento.anio > acumulador.libroMasNuevo.anio) {
            acumulador.libroMasNuevo = elemento;
        }

        //contar los libros por año
        const anio = elemento.anio;
        acumulador.frecuenciaAnios[anio] = (acumulador.frecuenciaAnios[anio] || 0) + 1;

        return acumulador
    }, valorActual);

    // usar Math.round para redondear decimales
    const anioPromedio = Math.round(estadisticas.sumaAnios / array.length);

    // diferencia de años
    const diferenciaAnios = estadisticas.libroMasNuevo.anio - estadisticas.libroMasAntiguo.anio;

    // Año más frecuente
    const conteoDeAnios = estadisticas.frecuenciaAnios;

    const tablaDeFrecuencias = Object.keys(conteoDeAnios).map(anio => ({
        'Año de Publicación': parseInt(anio), // Convertimos la clave (string) a número
        'Cantidad de Libros': conteoDeAnios[anio] // Este es el valor (conteo)
    }));

    // Ordenamos la tabla para que los años con más libros aparezcan primero.
    tablaDeFrecuencias.sort((a, b) => b['Cantidad de Libros'] - a['Cantidad de Libros']);

    return {
        anioPromedio: anioPromedio,
        tablaFrecuenciaAnios: tablaDeFrecuencias,
        libroMasAntiguo: estadisticas.libroMasAntiguo,
        libroMasNuevo: estadisticas.libroMasNuevo,
        diferenciaAnios: diferenciaAnios
    }
}

module.exports = {
    calcularEstadisticas
}