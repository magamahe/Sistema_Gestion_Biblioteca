const { 
    resultadosParaVistaLibros 
    } = require("./00-funciones_auxiliares");

// Punto 7: Cálculos estadísticos

// a)- Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
//  ✔Promedio de años de publicación de los libros.
//  ✔Año de publicación más frecuente.
//  ✔Diferencia en años entre el libro más antiguo y el más nuevo.

const libros = require("./01-lista_libros");

const calcularEstadisticas = (array) => {
    // ver si hay libros en la biblioteca
    if (array.length === 0 ) {
        return {
            totalLibros : 0,
            anioPromedio : 0,
            anioMasFrecuente: 0,
            libroMasAntiguo: null,
            libroMasNuevo: null,
            diferencia: 0
        };
    }

    //Promedio de año de publicacion -> sumar todos los años y dividir por cantidad de libros

    const valorActual = {
        sumaAnios : 0,
        frecuenciaAnios: {},
        libroMasAntiguo: array[0],
        libroMasNuevo: array[0],
        diferencia: 0
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
    // Object.keys(conteoDeAnios) da un array
    const anioMasFrecuente = Object.keys(conteoDeAnios).reduce((a, b) => 
        // Comparar la frecuencia del año 'a' con la del año 'b' y quedarse con el de mayor frecuencia... si hay empate devuelve el último
        conteoDeAnios[a] > conteoDeAnios[b] ? a : b
    );

    return {
        anioPromedio : anioPromedio,
        anioMasFrecuente: parseInt(anioMasFrecuente),
        libroMasAntiguo : resultadosParaVistaLibros(estadisticas.libroMasAntiguo),
        libroMasNuevo : resultadosParaVistaLibros(estadisticas.libroMasNuevo),
        diferenciaAnios: diferenciaAnios
    }
}

module.exports = {
    calcularEstadisticas
}