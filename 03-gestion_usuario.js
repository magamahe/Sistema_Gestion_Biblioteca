/* PUNTO 3: Gestión de Usuarios */

//importación de función auxiliar para imprimir tabla usuario
const {
  impresionTablaUsuario,
  impresionUsuariosConDetalle
} = require("./00-funciones_auxiliares.js")

// Importamos el array de usuarios desde un archivo externo.
// Este array se compartirá entre todos los módulos que lo requieran.
const usuarios = require("./01-lista_usuarios.js");

/* ---------------------------------------------------
a) registrarUsuario(nombre, email)
Agrega un nuevo usuario al array usuarios. 
-------------------------------------------------------*/

// 🔢 Genera un nuevo ID incremental para un usuario nuevo.
// Si no hay usuarios registrados, arranca desde 1.
// Si hay usuarios, toma el ID más alto actual y le suma 1.

function generarNuevoIdUsuario() {
    if (usuarios.length === 0) return 1;// Si no hay usuarios, el primer ID será 1
  const ids = usuarios.map(u => u.id);// Extrae todos los IDs de los usuarios existentes
  return Math.max(...ids) + 1;
}


// 🧑‍💼 Agrega un nuevo usuario al sistema con un ID único y sin libros prestados.
// Muestra un mensaje de éxito en consola.

function registrarUsuario(nombre, email) {
  const nuevoId = generarNuevoIdUsuario();// Genera un nuevo ID basado en los IDs actuales
  const nuevoUsuario = {
    id: nuevoId,
    nombre: nombre,
    email: email,
    librosPrestados: [] // Campo requerido por el sistema
  };
  usuarios.push(nuevoUsuario); // Agrega el nuevo usuario al array global con datos iniciales
  //console.log(`\n✅ Usuario registrado correctamente:  \n- ID= ${nuevoId} \n- Nombre= ${nombre}  \n- Email= ${email} `);   // Muestra mensaje de éxito
  // console.table({
  //   ID: nuevoUsuario.id,
  //   Nombre: nuevoUsuario.nombre,
  //   Email: nuevoUsuario.email
  // });
  impresionTablaUsuario(nuevoUsuario);
  return true;
}

/* ---------------------------------------------------
b) mostrarTodosLosUsuarios()
Devuelve el array completo de usuarios.
-------------------------------------------------------*/

// 📋 Muestra todos los usuarios registrados en formato de tabla.
// Es útil para tener una vista ordenada desde la consola.
function mostrarTodosLosUsuarios(arrayDeLibros) {
  console.log("�✨ === USUARIOS DE LA BIBLIOTECA === ✨�")
  impresionUsuariosConDetalle (usuarios, arrayDeLibros);
  return true;
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
  let email = prompt("📧 Ingrese email: ");// Solicita al usuario que ingrese un email
  let usuario = buscarUsuario(email); // Busca si ese email existe en el sistema

  // Mientras no se encuentre un usuario con ese email...
  while (!usuario) {
    console.log("❌ Email no registrado.");

    email = prompt("📧 Ingrese un email válido o escriba 'salir' para cancelar: "); // Vuelve a pedir el email
    
    if (email.toLowerCase() === 'salir') { // Si el usuario escribe "salir", se cancela la operación
      return null;
    }

    usuario = buscarUsuario(email);// Vuelve a buscar el usuario con el nuevo email ingresado
  }
  return usuario;// Si se encontró un usuario, lo devuelve
  
}

/* ------------------------------------------- -----
d) borrarUsuario(nombre, email)
Elimina un usuario dado su nombre y email. 
---------------------------------------------------*/

// ❌ Elimina un usuario del sistema si coinciden nombre (sin acentos) y email.
// Utiliza normalización para ignorar diferencias de acentos.
// Muestra mensajes de éxito o error según corresponda.

function borrarUsuario(nombre, email) {
  const index = usuarios.findIndex(u =>
    normalizarTexto(u.nombre) === normalizarTexto(nombre) &&
    u.email.toLowerCase() === email.toLowerCase()
  );

  if (index === -1) {
    console.log(`❌ Usuario no encontrado con ese nombre: ${nombre}  y email: ${email}`);
    return false;
  }

  const usuarioBorrado = usuarios[index];
  usuarios.splice(index, 1);
  console.log("=========================================");
  console.log("✅✅ Usuario borrado correctamente:✅✅");
  // Mostrar solo campos clave en tabla (sin índice extra)
  // console.table({
  //   id: usuarioBorrado.id,
  //   nombre: usuarioBorrado.nombre,
  //   email: usuarioBorrado.email
  // });
  impresionTablaUsuario(usuarioBorrado);
  console.log("=========================================");

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
function esEmailValido(email) {
          const partes = email.split('@');
          return (
            partes.length === 2 &&
            partes[0].length >= 8 &&
            partes[1].includes('.')
          );
        }

// Exportamos las funciones y el array para que puedan usarse en otros archivos del sistema.
module.exports = {
  registrarUsuario,
  mostrarTodosLosUsuarios,
  buscarUsuario,
  solicitarEmailExistente,
  borrarUsuario,
  esEmailValido,
  //usuarios // exportado en caso de necesitarlo externamente
};
