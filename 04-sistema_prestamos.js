// PUNTO 4: Préstamos

const libros = require("./01-lista_libros.js");
const usuarios = require("./01-lista_usuarios.js");

/* -------------------------------------------------------- 
a) prestarLibro(idLibro, idUsuario)
Marca el libro como no disponible y lo asigna al usuario. 
-----------------------------------------------------------*/

function prestarLibro(idLibro, idUsuario) {
  
  const libro = libros.find(l => l.id == idLibro); // Busca el libro por ID en el array de libros
  const usuario = usuarios.find(u => u.id == idUsuario);// Busca el usuario por ID en el array de usuarios

  // Verifica que el libro y el usuario existan, y que el libro esté disponible
  if (libro && usuario && libro.disponible) {
    libro.disponible = false;                 // Marca el libro como no disponible
    usuario.librosPrestados.push(libro.id);   // Agrega el ID del libro al array del usuario
    console.log(`✅ Libro: ${libro.título} prestado a: ${usuario.nombre}.`);
    return true;                              // Devuelve true indicando que el préstamo fue exitoso
  } else {
    console.log(`❌ No se pudo realizar el préstamo del libro. Verifique:\n- ID del libro: ${idLibro}\n- ID del usuario: ${idUsuario}`);
    return false;                             // Devuelve false si hubo algún problema
  }
}

/* -----------------------------------------------------------------------------
b) devolverLibro(idLibro, idUsuario)
Marca el libro como disponible y lo remueve de los libros prestados del usuario.
-------------------------------------------------------------------------------- */

function devolverLibro(idLibro, idUsuario) {
  
  const libro = libros.find(l => l.id === idLibro);// Busca el libro por su ID en el array de libros
  const usuario = usuarios.find(u => u.id === idUsuario);   // Busca el usuario por su ID en el array de usuarios

  // Verifica que el libro y el usuario existan, y que el libro esté actualmente prestado
  if (libro && usuario && !libro.disponible) {
        libro.disponible = true; // Marca el libro como disponible nuevamente
        usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);// Quita el ID del libro del array de libros prestados del usuario
        console.log(` ✅ Libro: ${libro.título} devuelto por: ${usuario.nombre} correctamente.`); // Muestra un mensaje indicando que la devolución fue exitosa
        return true; // Devuelve true para indicar que la operación fue exitosa
  } else {
        console.log("❌No se pudo realizar la devolución del libro.");// Si no se cumplen las condiciones, informa que no se pudo devolver
        return false;     // Devuelve false para indicar que hubo un error
  }
}

/* -----------------------------------------------------------------------------------------------
Funcion utilizada para mostrar los libros disponibles al momento de hacer el prestamo */

function mostrarLibrosDisponibles(libros) {
  const disponibles = libros.filter(libro => libro.disponible);
  console.table(disponibles, ["id", "título", "autor", "año"]); // Muestra solo algunas columnas
}



module.exports = {
  prestarLibro,
  devolverLibro,
  mostrarLibrosDisponibles
};
