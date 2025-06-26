// Punto 2: Funciones de gestión de libros

// a)- Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

// importar libros:
const { libros } = require('./listaLibros');

//armar una copia del array original
let copiaLibros = libros;

// crear una función auxiliar para buscar por ID, para ver repetidos: Usuario y libro
const encontrado = (array, id) => array.find(elemento => elemento.id === id); 

// crear una función para mostrar último elemento -> indicar al usuario cual es el último id
const ultimoElemento = array => array[array.length - 1];

// funcion que agrega libro 
const agregarLibro = (id, titulo, autor, anio, genero) => {

    //corroborar si el id no esta en el array libros

    let idExistente = encontrado(copiaLibros, id);
    let ultimoLibro = ultimoElemento(copiaLibros);

    if (!idExistente) {
        let libro = {
            id: id,
            título: titulo,
            autor: autor,
            año: anio,
            género: genero
        }

        // agregar el libro al array (¿conviene que sea unua copia del array original?)

        copiaLibros.push(libro);

        console.log(`El libro ha sido agregado con éxito`);
        
    } else {
        // mensajes en caso de false
        console.log(`El id ingresado ya se encuentra en la base de datos:`);
        console.log(`${idExistente.id} - ${idExistente.título}`);    
        console.log(`Ingrese un id diferente`);  
        console.log(`Último id agregado:`);  
        console.log(ultimoLibro.id);
    }

    return ultimoElemento
}

//prueba
//agregarLibro(1, 'Harry Potter', 'stef', 2010, 'misterio');
agregarLibro(12, 'Harry Potter', 'stef', 2010, 'misterio');
 
// b)- Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.

// c)- Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

// d)- Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
