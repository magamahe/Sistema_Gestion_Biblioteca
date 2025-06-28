// archivo con funciones que pueden ser reutilizada a lo largo del código

// crear una función auxiliar para buscar por ID
const encontrado = (array, id) => array.find(elemento => elemento.id === id);

// crear una función para mostrar último elemento -> indicar al usuario cual es el último id
const ultimoElemento = array => array[array.length - 1];

// función para formatear la vista de un solo objeto (anio por año, titulo po título y genero por género)
const transformarLibro = elemento => ({
    ID: elemento.id,
    Título: elemento.titulo,
    Autor: elemento.autor,
    Año: elemento.anio,
    Género: elemento.genero
});

// función que decide que formatear, si un objeto o una lista de objetos

const resultadosParaVistaLibros = datos => {

    if (Array.isArray(datos)) {
        // si es un array, mapeamos cada elementos y los transformamos con la funcion transformarLibro()
        return datos.map(transformarLibro);
    } else {
        // si es un solo elemento, aplicamos la funcion transformarLibro()
        return transformarLibro(datos);
    }
}

const impresionTablaLibro = elemento => console.table(resultadosParaVistaLibros(elemento));

const transformarUsuario = elemento => ({
    ID: elemento.id,
    Nombre: elemento.nombre,
    Email: elemento.email,
    LibrosPrestados:elemento.librosPrestados 
});

const resultadosParaVistaUsuarios = datos => {

    if (Array.isArray(datos)) {
        // si es un array, mapeamos cada elementos y los transformamos con la funcion transformarUsuario()
        return datos.map(transformarUsuario);
    } else {
        // si es un solo elemento, aplicamos la funcion transformarUsuario()
        return transformarUsuario(datos);
    }
}

const impresionTablaUsuario = elemento => console.table(resultadosParaVistaUsuarios(elemento));

// Este objeto traduce la entrada del usuario a las claves reales del objeto libro
const mapaCriterios = {
    "título": "titulo",
    "titulo": "titulo",
    "autor": "autor",
    "género": "genero",
    "genero": "genero",
    "año": "anio"
};

//exportación para que puedan emplearse en otros archivos
module.exports = {
    encontrado,
    ultimoElemento,
    resultadosParaVistaLibros,
    impresionTablaLibro,
    resultadosParaVistaUsuarios,
    impresionTablaUsuario,
    mapaCriterios

};