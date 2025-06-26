/* 👥 PUNTO 3: Gestión de Usuarios */

// Importamos el array de usuarios desde un archivo externo.
// Este array se compartirá entre todos los módulos que lo requieran.
const usuarios = require('./listaUsuarios.js');

/* ---------------------------------------------------
a) registrarUsuario(nombre, email)
Agrega un nuevo usuario al array usuarios. 
-------------------------------------------------------*/

// 🔢 Genera un nuevo ID incremental para un usuario nuevo.
// Si no hay usuarios registrados, arranca desde 1.
// Si hay usuarios, toma el ID más alto actual y le suma 1.

function generarNuevoIdUsuario() {
  // Si no hay usuarios, el primer ID será 1
  if (usuarios.length === 0) return 1;

  // Extrae todos los IDs de los usuarios existentes
  const ids = usuarios.map(u => u.id);

  // Devuelve el mayor ID + 1, asegurando que no se repitan
  return Math.max(...ids) + 1;
}


// 🧑‍💼 Agrega un nuevo usuario al sistema con un ID único y sin libros prestados.
// Muestra un mensaje de éxito en consola.

function registrarUsuario(nombre, email) {
  // Genera un nuevo ID basado en los IDs actuales
  const nuevoId = generarNuevoIdUsuario();

  // Agrega el nuevo usuario al array global con datos iniciales
  usuarios.push({ id: nuevoId, nombre, email, librosPrestados: [] });

  // Muestra mensaje de éxito
  console.log("✅ Usuario registrado correctamente.");
}

/* ---------------------------------------------------
b) mostrarTodosLosUsuarios()
Devuelve el array completo de usuarios.
-------------------------------------------------------*/

// 📋 Muestra todos los usuarios registrados en formato de tabla.
// Es útil para tener una vista ordenada desde la consola.
function mostrarTodosLosUsuarios() {
  console.table(usuarios);
}


/* ---------------------------------------------------
c) buscarUsuario(email)
Devuelve la información del usuario a partir del email.
-------------------------------------------------------*/

// 🔎 Busca un usuario por email (ignorando mayúsculas).
// Devuelve el objeto usuario si lo encuentra, o undefined si no.
function buscarUsuario(email) {
  return usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());
}


// 📧 Pide al usuario que ingrese un email válido ya registrado.
// Repite el prompt hasta que se encuentre un usuario con ese email.
// Permite cancelar escribiendo 'salir'.

function solicitarEmailExistente(prompt) {
  // Solicita al usuario que ingrese un email
  let email = prompt("📧 Ingrese email:");
  let usuario = buscarUsuario(email); // Busca si ese email existe en el sistema

  // Mientras no se encuentre un usuario con ese email...
  while (!usuario) {
    console.log("❌ Email no registrado.");

    // Vuelve a pedir el email
    email = prompt("📧 Ingrese un email válido o escriba 'salir' para cancelar:");

    // Si el usuario escribe "salir", se cancela la operación
    if (email.toLowerCase() === 'salir') {
      return null;
    }

    // Vuelve a buscar el usuario con el nuevo email ingresado
    usuario = buscarUsuario(email);
  }

  // Si se encontró un usuario, lo devuelve
  return usuario;
}

/* ------------------------------------------- -----
d) borrarUsuario(nombre, email)
Elimina un usuario dado su nombre y email. 
---------------------------------------------------*/

// ❌ Elimina un usuario del sistema si coinciden nombre (sin acentos) y email.
// Utiliza normalización para ignorar diferencias de acentos.
// Muestra mensajes de éxito o error según corresponda.

function borrarUsuario(nombre, email) {
  // Buscamos el índice del usuario cuyo nombre (normalizado) y email coincidan
  const index = usuarios.findIndex(u =>
    normalizarTexto(u.nombre) === normalizarTexto(nombre) &&   // Compara nombres sin acentos
    u.email.toLowerCase() === email.toLowerCase()              // Compara emails sin importar mayúsculas
  );

  // Si no se encontró el usuario, se informa y se termina la función
  if (index === -1) {
    console.log("❌ Usuario no encontrado con ese nombre y email.");
    return false;
  }

  // Eliminamos al usuario del array usando su posición
  usuarios.splice(index, 1);

  // Confirmamos el borrado con un mensaje
  console.log("✅ Usuario borrado correctamente.");
  return true;
}



// 🧽 Normaliza texto convirtiendo a minúsculas y eliminando acentos.
// Esto permite comparar cadenas sin preocuparse por acentos o mayúsculas.

function normalizarTexto(texto) {
  return texto
    .toLowerCase()                          // Convierte todo el texto a minúsculas
    .normalize("NFD")                       // Descompone caracteres con acento (ej: á → a + ´)
    .replace(/[\u0300-\u036f]/g, "");       // Elimina los signos diacríticos (acentos)
}



// 📦 Exportamos las funciones y el array para que puedan usarse en otros archivos del sistema.
module.exports = {
  registrarUsuario,
  mostrarTodosLosUsuarios,
  buscarUsuario,
  solicitarEmailExistente,
  borrarUsuario,
  usuarios // exportado en caso de necesitarlo externamente
};
