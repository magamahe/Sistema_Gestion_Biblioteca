# Documentación del Código: Módulo - Gestión de Libros

## Descripción General

Este módulo contiene la lógica de negocio principal para la gestión de la colección de libros. Proporciona funciones para agregar, buscar, ordenar y eliminar libros de la biblioteca. Depende del módulo de funciones auxiliares para tareas comunes y de la lista de libros para los datos iniciales.

---

## Requisitos Previos

Este módulo requiere los siguientes módulos locales:
*   `./00-funciones_auxiliares.js` para funciones de búsqueda y visualización.
*   `./01-lista_libros.js` para la lista inicial de libros.
*   `prompt-sync` para la interacción con el usuario en la función de borrado.

## Funcionamiento del Código

El módulo define y exporta varias funciones de gestión:

### 1️⃣ Función `agregarLibro(titulo, autor, anio, genero)`

*   **Propósito**: Añadir un nuevo libro a la colección de la biblioteca, asignándole un ID único y validando las entradas.
*   **Parámetros**:
    *   `titulo` (string): Título del nuevo libro.
    *   `autor` (string): Autor del nuevo libro.
    *   `anio` (number): Año de publicación.
    *   `genero` (string): Género del libro.
*   **Lógica**:
    1.  **Validación del Año**: Comprueba que el `anio` sea un número de 4 cifras y no sea mayor al año actual. Si no es válido, muestra un error y devuelve `null`.
    2.  **Generación de ID**: Calcula un nuevo ID incremental encontrando el ID más alto existente en la biblioteca y sumándole 1.
    3.  **Creación del Objeto**: Construye un nuevo objeto `libro` con los datos proporcionados, un ID único y el estado `disponible: true`.
    4.  **Verificación de Duplicados**: Comprueba si ya existe un libro con el mismo título y autor (ignorando mayúsculas/minúsculas y espacios extra). Si ya existe, muestra una advertencia y devuelve `null`.
    5.  **Adición al Array**: Si todas las validaciones pasan, agrega el `nuevoLibro` al array `biblioteca` usando `push()`.
*   **Retorno**: Devuelve el objeto `nuevoLibro` si fue agregado exitosamente, o `null` si la operación falló.

### 2️⃣ Función `buscarLibro(criterio, valor)`

*   **Propósito**: Buscar libros en la biblioteca que coincidan con un criterio y valor específicos.
*   **Parámetros**:
    *   `criterio` (string): La propiedad por la que buscar (ej. "titulo", "autor").
    *   `valor` (string/number): El valor que se desea encontrar.
*   **Lógica**:
    1.  **Normalización**: Normaliza el `criterio` y el `valor` a minúsculas y sin espacios extra para una búsqueda flexible.
    2.  **Mapeo de Criterio**: Usa el `mapaCriterios` del módulo de auxiliares para traducir el `criterio` del usuario (ej. "título") a la clave interna del objeto (ej. "titulo").
    3.  **Filtrado**: Utiliza `Array.filter()` para crear un nuevo array `resultados` con todos los libros que cumplen la condición de búsqueda.
    4.  **Visualización**: Si se encuentran resultados, los muestra en formato de tabla. Si no, muestra un mensaje indicando que no se encontraron coincidencias.
*   **Retorno**: Devuelve el array de `resultados` (puede estar vacío).

### 3️⃣ Función `ordenarLibros(criterio)`

*   **Propósito**: Ordenar la lista completa de libros de la biblioteca según un criterio (título o año) utilizando el algoritmo de ordenamiento de burbuja (Bubble Sort).
*   **Parámetros**:
    *   `criterio` (string): La propiedad por la que ordenar ("titulo" o "año").
*   **Lógica**:
    1.  **Mapeo de Criterio**: Similar a `buscarLibro`, traduce el criterio del usuario a la clave interna del objeto.
    2.  **Copia del Array**: Crea una copia del array `biblioteca` (`const copiaBiblioteca = [...biblioteca];`) para no modificar el orden original.
    3.  **Algoritmo Bubble Sort**:
        *   Utiliza dos ciclos `for` anidados para comparar elementos adyacentes.
        *   Si un elemento es mayor que el siguiente según el `criterio` (`valorActual > valorSiguiente`), los intercambia de posición.
        *   Incluye una optimización: si en una pasada completa no se realiza ningún intercambio, el array ya está ordenado y el ciclo se detiene (`break`).
*   **Retorno**: Devuelve el `copiaBiblioteca` con los libros ordenados.

### 4️⃣ Función `borrarLibro(id)`

*   **Propósito**: Eliminar un libro de la biblioteca por su ID.
*   **Parámetros**:
    *   `id` (number): El ID del libro que se desea eliminar.
*   **Lógica**:
    1.  **Búsqueda**: Utiliza la función `encontrado` del módulo de auxiliares para localizar el libro por su `id`.
    2.  **Validación**:
        *   Si el libro no se encuentra, muestra un error y devuelve `null`.
        *   Si se encuentra pero no está `disponible` (está prestado), muestra una advertencia y no permite el borrado.
    3.  **Confirmación del Usuario**: Si el libro está disponible para ser borrado, solicita al usuario una confirmación ("si" o "no") para proceder, advirtiendo que la acción es permanente.
    4.  **Eliminación**: Si el usuario confirma, utiliza `indexOf()` para encontrar el índice del libro y `splice(indice, 1)` para eliminarlo del array `biblioteca`.
*   **Retorno**: Devuelve el array `biblioteca` modificado, o `null` si el libro no existía.

🏁 **Resumen**

Este módulo es el corazón de la gestión de la colección de libros. Encapsula toda la lógica de CRUD (Crear, Leer, Actualizar -aunque aquí es ordenar-, Borrar) para los libros, aplicando validaciones y algoritmos de búsqueda y ordenamiento para asegurar la integridad y usabilidad de los datos.