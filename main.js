const prompt = require("prompt-sync")();

function menuPrincipal() {
  let opcion;
  do {
    const entrada = prompt(
`📚✨ === SISTEMA DE BIBLIOTECA === ✨📚
  
     ✨ === MENU PRINCIPAL === ✨
       - Seleccione una opción -

1️⃣   Agregar libro
2️⃣   Buscar libro
3️⃣   Ordenar libros
4️⃣   Borrar libro
5️⃣   Registrar usuario
6️⃣   Ver todos los usuarios
7️⃣   Buscar usuario
8️⃣   Borrar usuario
9️⃣   Prestar libro
1️⃣ 0️⃣  Devolver libro
1️⃣ 1️⃣  Reporte de libros
1️⃣ 2️⃣  Libros con títulos largos
1️⃣ 3️⃣  Estadísticas
1️⃣ 4️⃣  Normalizar datos
0️⃣   Salir

📥Ingrese una opción: `);

opcion = parseInt(entrada);

    if (isNaN(opcion) || opcion < 0 || opcion > 14) {
      console.log("⚠️ Opción inválida. Ingrese un número entre 0 y 14.");
      prompt("⏎ Presione Enter para continuar...");
      continue;
    }

    switch (opcion) {
      case 1:
        agregarLibro(
          parseInt(prompt("🔢 ID del libro:")),
          prompt("📖 Título:"),
          prompt("✍️ Autor:"),
          parseInt(prompt("📅 Año:")),
          prompt("🏷️ Género:")
        );
        break;
      case 2:
        const crit = prompt("🔍 Buscar por: ¿titulo, autor o genero?");
        const val = prompt("🔎 Ingrese valor a buscar:");
        console.log(buscarLibro(crit, val));
        break;
      case 3:
        const criterio = prompt("↕️ Ordenar por: titulo o anio");
        ordenarLibros(criterio);
        break;
      case 4:
        borrarLibro(parseInt(prompt("🗑️ ID del libro a borrar:")));
        break;
      case 5:
        registrarUsuario(prompt("🧑 Nombre:"), prompt("📧 Email:"));
        break;
      case 6:
        mostrarTodosLosUsuarios();
        break;
      case 7:
        console.log(buscarUsuario(prompt("📧 Ingrese email:")));
        break;
      case 8:
        borrarUsuario(prompt("🧑 Nombre:"), prompt("📧 Email:"));
        break;
      case 9:
        prestarLibro(parseInt(prompt("📘 ID del libro:")), parseInt(prompt("🧑 ID del usuario:")));
        break;
      case 10:
        devolverLibro(parseInt(prompt("📘 ID del libro:")), parseInt(prompt("🧑 ID del usuario:")));
        break;
      case 11:
        generarReporteLibros();
        break;
      case 12:
        librosConPalabrasEnTitulo();
        break;
      case 13:
        calcularEstadisticas();
        break;
      case 14:
        normalizarDatos();
        break;
      case 0:
        console.log("👋 Gracias por usar el sistema. ¡Hasta luego!");
        break;
    }

    if (opcion !== 0) {
      prompt("⏎ Presione Enter para volver al menú...");
    }

  } while (opcion !== 0);
}

menuPrincipal();