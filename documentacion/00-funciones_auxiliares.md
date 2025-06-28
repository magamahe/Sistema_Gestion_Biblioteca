# Documentación del Código: Módulo de Funciones Auxiliares

## Descripción General

Este módulo centraliza un conjunto de funciones auxiliares (helpers) reutilizables que son utilizadas a lo largo de todo el sistema de gestión de la biblioteca. Su propósito es encapsular lógica común para tareas como buscar elementos, formatear datos para su visualización y mapear entradas de usuario a claves internas de objetos, manteniendo el resto del código más limpio y organizado.

---

## Requisitos Previos

Este módulo no tiene dependencias externas. Utiliza funcionalidades nativas de JavaScript.

## Funcionamiento del Código

Este módulo exporta varias funciones y un objeto:

### 1️⃣ Función `encontrado(array, id)`

```js
const encontrado = (array, id) => array.find(elemento => elemento.id === id);
```

*   **Propósito**: Encontrar un elemento específico dentro de un array de objetos basándose en su propiedad `id`.
*   **Detalle**:
    *   Es una función flecha que recibe un `array` y un `id` como parámetros.
    *   Utiliza el método `Array.find()` para buscar el primer `elemento` en el `array` cuya propiedad `id` sea estrictamente igual (`===`) al `id` proporcionado.
    *   Devuelve el objeto completo si lo encuentra, o `undefined` si no hay coincidencias.

### 2️⃣ Función `ultimoElemento(array)`

```js
const ultimoElemento = array => array[array.length - 1];
```

*   **Propósito**: Obtener el último elemento de un array.
*   **Detalle**:
    *   Calcula el índice del último elemento (`array.length - 1`) y lo utiliza para acceder y devolver dicho elemento.

### 3️⃣ Funciones de Formateo y Visualización de Libros

```js
const transformarLibro = elemento => ({ ... });
const resultadosParaVistaLibros = datos => { ... };
const impresionTablaLibro = elemento => console.table(resultadosParaVistaLibros(elemento));
```

*   **Propósito**: Preparar y mostrar datos de libros en un formato legible para el usuario.
*   **Detalle**:
    *   `transformarLibro(elemento)`: Toma un objeto libro y devuelve un nuevo objeto con claves más descriptivas y en español (ej. `titulo` se convierte en `Título`), listo para ser mostrado en una tabla.
    *   `resultadosParaVistaLibros(datos)`: Es una función flexible que verifica si la entrada `datos` es un array o un solo objeto. Si es un array, aplica `transformarLibro` a cada elemento. Si es un solo objeto, lo transforma directamente. Esto permite usar la misma lógica de impresión para uno o varios libros.
    *   `impresionTablaLibro(elemento)`: Es un atajo que toma datos de libros, los formatea usando `resultadosParaVistaLibros` y los imprime directamente en la consola en un formato de tabla usando `console.table()`.

### 4️⃣ Funciones de Formateo y Visualización de Usuarios

```js
const transformarUsuario = (elemento, arrayDeLibros) => { ... };
const resultadosParaVistaUsuarios = (datos, arrayDeLibros) => { ... };
const impresionUsuariosConDetalle = (datos, arrayDeLibros) => { ... };
const impresionTablaUsuario = (elemento, arrayDeLibros) => { ... };
```

*   **Propósito**: Preparar y mostrar datos de usuarios, incluyendo la resolución de los IDs de libros prestados a sus títulos correspondientes.
*   **Detalle**:
    *   `transformarUsuario(elemento, arrayDeLibros)`: Es la función clave. Toma un objeto usuario y el array completo de libros. Mapea la lista `librosPrestados` (que contiene IDs) y, para cada ID, busca el libro correspondiente en `arrayDeLibros` para obtener su título. Devuelve un nuevo objeto usuario formateado donde `LibrosPrestados` es una cadena con los IDs y títulos de los libros.
    *   `resultadosParaVistaUsuarios(datos, arrayDeLibros)`: Al igual que su contraparte para libros, maneja tanto un solo usuario como un array de usuarios, aplicando la función `transformarUsuario`.
    *   `impresionTablaUsuario(...)`: Es un atajo que formatea y muestra los datos de usuario en un `console.table()`.
    *   `impresionUsuariosConDetalle(...)`: Proporciona una vista más detallada y formateada de los usuarios, imprimiendo cada propiedad en una línea separada, ideal para cuando la lista de libros prestados es larga.

### 5️⃣ Objeto `mapaCriterios`

```js
const mapaCriterios = {
    "título": "titulo", "titulo": "titulo",
    "autor": "autor", "género": "genero",
    "genero": "genero", "año": "anio", "anio": "anio"
};
```

*   **Propósito**: Traducir la entrada del usuario (que puede tener acentos o variaciones) a las claves de propiedad reales de los objetos libro.
*   **Detalle**:
    *   Permite que funciones como `buscarLibro` y `ordenarLibros` sean más flexibles, aceptando "título" o "titulo" del usuario y sabiendo que deben operar sobre la propiedad `titulo` del objeto.

### 6️⃣ Exportación del Módulo

```js
module.exports = { ... };
```

*   **Propósito**: Hacer que todas las funciones y objetos definidos en este módulo estén disponibles para ser importados y utilizados en otros archivos del proyecto.

🏁 **Resumen**

El módulo de funciones auxiliares es la columna vertebral de la reutilización de código en este proyecto. Al centralizar la lógica de formato y búsqueda, se evita la duplicación de código y se facilita el mantenimiento, asegurando que la visualización de datos y la interacción con las estructuras de datos sean consistentes en toda la aplicación.


