
# 📚 Sistema de Gestión de Biblioteca

## 📝 Introducción
Este trabajo práctico integrador fue desarrollado con el objetivo de aplicar los conocimientos adquiridos sobre **JavaScript** en la primera etapa del curso. Se implementa un sistema de gestión de una biblioteca, permitiendo administrar libros y usuarios mediante funcionalidades distribuidas en 10 puntos.

## 🎯 Objetivo
Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, aplicando los conceptos fundamentales de JavaScript vistos en el módulo.

---

## 🔢 Punto 1: Estructura de Datos

### a) Array de libros
- Se crea un array llamado `libros` con al menos 10 objetos libro.
- Cada libro posee: `id`, `título`, `autor`, `año`, `género`, `disponible` (booleano).

### b) Array de usuarios
- Se crea un array llamado `usuarios` con al menos 5 objetos usuario.
- Cada usuario posee: `id`, `nombre`, `email`, `librosPrestados` (array de ids).

---

## 🛠 Punto 2: Funciones de Gestión de Libros

### a) `agregarLibro(id, titulo, autor, anio, genero)`
Agrega un nuevo libro al array `libros`.

### b) `buscarLibro(criterio, valor)`
Busca libros por título, autor o género utilizando búsqueda lineal.

### c) `ordenarLibros(criterio)`
Ordena los libros por título o año con el algoritmo de **burbuja (bubble sort)**.

### d) `borrarLibro(id)`
Elimina un libro dado su id del array `libros`.

---

## 👥 Punto 3: Gestión de Usuarios

### a) `registrarUsuario(nombre, email)`
Agrega un nuevo usuario al array `usuarios`.

### b) `mostrarTodosLosUsuarios()`
Devuelve el array completo de usuarios.

### c) `buscarUsuario(email)`
Devuelve la información del usuario a partir del email.

### d) `borrarUsuario(nombre, email)`
Elimina un usuario dado su nombre y email.

---

## 🔄 Punto 4: Sistema de Préstamos

### a) `prestarLibro(idLibro, idUsuario)`
Marca el libro como no disponible y lo asigna al usuario.

### b) `devolverLibro(idLibro, idUsuario)`
Marca el libro como disponible y lo remueve de los libros prestados del usuario.

---

## 📊 Punto 5: Reportes

### `generarReporteLibros()`
Usa `.map()`, `.filter()`, `.reduce()` para mostrar:
- Cantidad total de libros.
- Cantidad de libros prestados.
- Cantidad de libros por género.
- Libro más antiguo y más nuevo.

---

## 🔍 Punto 6: Identificación Avanzada de Libros

### `librosConPalabrasEnTitulo()`
Identifica libros con títulos de más de una palabra, **solo letras** (sin números ni caracteres especiales). Devuelve un array con estos títulos.

---

## 📈 Punto 7: Cálculos Estadísticos

### `calcularEstadisticas()`
Usa `Math` para calcular:
- Promedio de años de publicación.
- Año más frecuente.
- Diferencia entre el libro más antiguo y más nuevo.

---

## 🧹 Punto 8: Manejo de Cadenas

### `normalizarDatos()`
- Convierte títulos a mayúsculas.
- Elimina espacios de nombres de autores.
- Convierte emails a minúsculas.

---

## 🖥 Punto 9: Interfaz de Usuario por Consola

### `menuPrincipal()`
Muestra un menú interactivo con `prompt()`. Usa `switch` e `if` para navegar por las funcionalidades anteriores.

---

## 💬 Punto 10: Comentarios y Explicaciones

- Todo el código debe tener comentarios explicativos.
- Seccionar por punto y explicar brevemente cada bloque de código.

---

## ✅ Recomendaciones
- Usar buenas prácticas de nomenclatura (`camelCase`).
- Dividir las funcionalidades en funciones reutilizables.
- Validar entradas del usuario en los `prompt()`.

---

🚀 ¡Listo para comenzar a programar!
