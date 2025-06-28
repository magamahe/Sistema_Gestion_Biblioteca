// importación de funciones auxiliares 
const { encontrado,
        resultadosParaVistaLibros,
        mapaCriterios
        } = require("./00-funciones_auxiliares.js");

// llamada a prompt para interactuar con el usuario
const prompt = require("prompt-sync")();
// importar array de libros
const libros = require("./01-lista_libros.js");
// armar una copia del array original
const biblioteca = [...libros];

// Punto 2: Funciones de gestión de libros

// a)- Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

/**
 * Agrega un nuevo libro a la biblioteca
 * @param {number} id - El id del libro.
 * @param {string} titulo - El título del libro.
 * @param {string} autor - El autor del libro.
 * @param {number} anio - El año de publicación.
 * @param {string} genero - El género del libro.
 * @returns {object} El objeto del libro recién creado.
 */

// función que agrega libro 
const agregarLibro = (id, titulo, autor, anio, genero) => {

    //si el libro no es encontrado, se lo agrega a la biblioteca
    if (!encontrado(biblioteca, id)) {
        // se crea una variable con el objeto que tiene todas las propiedades del libro y las recibe de los parametros
        let nuevoLibro = {
            id: id,
            titulo: titulo,
            autor: autor,
            anio: anio,
            genero: genero,
            disponible: true
        }

        //se agrega al array biblioteca
        biblioteca.push(nuevoLibro);

        console.log(`✅ El libro ha sido agregado con éxito`);
        return nuevoLibro;

    } else {
        // mensajes en caso de false
        console.log(`❌ ERROR: El ID ya exite`);
        return null; // Indica que la operación falló
    }
}

//prueba
// let libro1 = agregarLibro(1, "Harry Potter", "stef", 2010, "misterio");
// let libro2 = agregarLibro(12, "Harry Potter", "stef", 2010, "misterio")


// Comprobamos si libro1 NO es null antes de intentar usarlo
// if (libro1) {
//     console.log("Datos del libro 1:");
//     console.table(resultadosParaVista(libro1));
// }


// Comprobamos si libro2 NO es null antes de intentar usarlo
// if (libro2) {
//     console.log("Datos del libro 2:");
//     console.table(resultadosParaVista(libro2));
// }

// problema -> usuario proporcion id para libro, lo ideal es que sea automático y autoincremental
// posible solución:
// const agregarLibro = (titulo, autor, anio, genero) => {
//     // Encontrar el ID más alto actual en la biblioteca

// Revisar que nuevoLibro no esté duplicado en Biblioteca
// .some(): Devuelve true si al menos un elemento del array cumple la condición, y false si no

// const yaExiste = biblioteca.some( libro => {
// pasar a minusculas y quitar espacios para comparacion exacta
// libro.titulo.toLowerCase().trim() === titulo.toLowerCase().trim() && libro.autor.toLowerCase().trim() === autor.toLowerCase().trim()
// })

// if ( yaExiste ) {
//     console.log(`⚠️  Advertencia: El libro "${titulo}" de ${autor} ya se encuentra en la biblioteca. No se agregó.`);
//     return null; // detiene la función y el libro no se agrega  
// }

//     const maxId = biblioteca.reduce((max, libro) => (libro.id > max ? libro.id : max), 0);

//     const nuevoLibro = {
//         id: maxId + 1,
//         titulo, 
//         autor,
//         anio,
//         genero
//     };

//     console.log("✅ Libro agregado con éxito:");
//     console.log(nuevoLibro);

//     return nuevoLibro;
// };

// console.table(resultadosParaVista(biblioteca)); // imprime el array como tabla...

// b)- Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.

/**
 * Busca libros en la biblioteca por un criterio y valor específicos.
 * @param {string} criterio - La propiedad por la que se va a buscar (ej. "titulo", "autor", "genero").
 * @param {string|number} valor - El valor a buscar.
 * @returns {Array<object>|null} Lista de libros que coinciden con criterio y valor o null si no hay coincidencia
 */

const buscarLibro = (criterio, valor) => {
    const criterioNormalizado = criterio.trim().toLowerCase();

    const claveInterna = mapaCriterios[criterioNormalizado];

    if (!claveInterna) {
        console.error(`❌ Error: Criterio de búsqueda inválido: "${criterio}".`);
        return null; // corta la ejecución
    }

    let valorNormalizado = valor.trim().toLowerCase();

    const resultados = biblioteca.filter(libro => {
        const propiedadLibro = libro[claveInterna];
        if (propiedadLibro !== undefined) {
            return propiedadLibro.toLowerCase().trim() === valorNormalizado;
        }
        return false;
    })

    if (resultados.length > 0) {
        console.log(`✅ Se encontraron ${resultados.length} libro(s) de ${criterio} con el valor ${valor}:`)
        console.table(resultadosParaVista(resultados))
    } else {
        console.log(`⚠️  No se encontraron libros del ${criterio} con el valor ${valor}.`);
    }

    return resultados;
}

// buscarLibro("genero", "NOVELA")

// c)- Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

/**
 * Ordena libros en la biblioteca por un criterio.
 * @param {string} criterio - La propiedad por la que se va a buscar (ej. "titulo", "anio").
 * @returns {Array<object>|null} Lista de libros ordenada, o null si el criterio es inválido.
 */

const ordenarLibros = criterio => {
    const criterioNormalizado = criterio.trim().toLowerCase();

    const claveInterna = mapaCriterios[criterioNormalizado];

    if (!claveInterna) {
        console.error(`❌ Error: Criterio de ordenamiento inválido: "${criterio}".`);
        return null; // corta la ejecución
    }

    // se hace una copia porque se modifica luego con el reordenamiento
    const copiaBiblioteca = [...biblioteca];
    const cantidadLibros = copiaBiblioteca.length;
    let intercambio;

    // for para recorrer la lista de libros
    for (let i = 0; i < cantidadLibros - 1; i++) {
        intercambio = false;
        // for anidado para comparción y reordenamiento
        // cantidadLibros - i - 1 -> los ultimos elementos i ya estan ordenaods correctamente
        for (let j = 0; j < cantidadLibros - i - 1; j++) {
            let valorActual = copiaBiblioteca[j][claveInterna];
            let valorSiguiente = copiaBiblioteca[j + 1][claveInterna];

            //comparacion 
            if (valorActual > valorSiguiente) {
                // intercambio de lugar
                [copiaBiblioteca[j], copiaBiblioteca[j + 1]] = [copiaBiblioteca[j + 1], copiaBiblioteca[j]];
                intercambio = true;
            }
        }

        if (!intercambio) {
            break
        }
    }
    return copiaBiblioteca;
}

// let resultadosPorTitulo = ordenarLibros("título");
// let resultadosPorAnio = ordenarLibros("año");
// let resultadosPorGenero = ordenarLibros("género")

// console.table(resultadosParaVista(resultadosPorTitulo));
// console.table(resultadosParaVista(resultadosPorAnio));
// console.table(resultadosParaVista(resultadosPorGenero));

// d)- Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

/**
 * Agrega un nuevo libro a la biblioteca
 * @param {number} id - El id del libro.
 * @returns {object} El objeto de la biblioteca con el libro eliminado
*/

// console.table(resultadosParaVista(biblioteca));

// ¡¿qué pasa con el libro que está prestado?

const borrarLibro = id => {

    const libroEncontrado = encontrado(biblioteca, id)

    if (libroEncontrado) {
        console.log(`✅ Libro encontrado:`);
        console.table(resultadosParaVistaLibros(libroEncontrado));

        // ¿preguntar al usuario si desea seguir? -> mostrar advertencia de que borrado es permanente
        let continuar = prompt(`❓  Desea continuar?... Ingrese si/no... `).toLowerCase().trim();

        if (continuar === "si") {
            const indice = biblioteca.indexOf(libroEncontrado);
            if (indice !== -1) { // si indice es -1 no se encontro el libro
                biblioteca.splice(indice, 1);
            }
            console.log(`⚠️  Libro eliminado`);
            
            return biblioteca;
        } else {
            return [];
        }

    } else {
        console.log(`❌ Error: El ID ingresado no existe`);
        return null;
    }
}

// console.table(resultadosParaVista(borrarLibro(12)));

module.exports = {
    agregarLibro,
    buscarLibro,
    ordenarLibros,
    borrarLibro
}