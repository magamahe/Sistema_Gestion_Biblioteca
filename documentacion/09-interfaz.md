# Documentación del Código: Interfaz de Usuario por Consola - Menú Principal

## Descripción General

Este script es el punto de entrada principal de la aplicación de gestión de biblioteca. Implementa una interfaz de usuario interactiva por consola que permite al usuario acceder a todas las funcionalidades del sistema (gestión de libros, usuarios, préstamos, reportes, etc.) a través de un menú de opciones.

---

## Requisitos Previos

Este módulo es el orquestador principal y depende de todos los demás módulos del proyecto para funcionar:
*   `prompt-sync` para la interacción con el usuario.
*   Todos los módulos de gestión, datos y análisis (`00-funciones_auxiliares.js` a `08-manejo_cadenas.js`).

## Funcionamiento del Código

El script se centra en una única función principal, `menuPrincipal()`.

### 1️⃣ Importación de Dependencias

```js
const prompt = require("prompt-sync")();
const { ... } = require("./00-funciones_auxiliares.js");
const { ... } = require("./02-gestion_libro.js");
// ... más importaciones de los otros módulos
```

*   **Propósito**: Cargar todas las funciones y datos necesarios de los otros módulos del proyecto para que estén disponibles para el menú.

### 2️⃣ Función `menuPrincipal()`

*   **Propósito**: Mostrar el menú de opciones al usuario, capturar su elección y ejecutar la funcionalidad correspondiente de manera repetitiva hasta que el usuario decida salir.
*   **Lógica**:
    1.  **Ciclo Infinito `while (true)`**: El menú se muestra continuamente dentro de un ciclo `while`. Este ciclo solo se detiene cuando el usuario elige la opción de salir.
    2.  **Visualización del Menú**: Utiliza `prompt()` con una plantilla literal multilínea para mostrar todas las opciones disponibles, desde "Agregar libro" (1) hasta "Salir" (0).
    3.  **Captura y Validación de Entrada**:
        *   Lee la entrada del usuario y la convierte a un número entero con `parseInt()`.
        *   Verifica si la entrada es un número válido (`isNaN`) y si está dentro del rango de opciones permitidas (0 a 14). Si no es válida, muestra un mensaje de error y continúa a la siguiente iteración del ciclo.
    4.  **Estructura `switch (opcion)`**: Se utiliza una sentencia `switch` para dirigir el flujo del programa basado en la `opcion` elegida por el usuario.
        *   **Cada `case` corresponde a una opción del menú**:
            *   **`case 1:` (Agregar libro)**: Solicita los datos del nuevo libro y llama a la función `agregarLibro()`.
            *   **`case 2:` (Buscar libro)**: Pide un criterio y un valor, y llama a `buscarLibro()`.
            *   **`case 9:` (Prestar libro)**: Muestra los libros disponibles, pide los IDs y llama a `prestarLibro()`.
            *   ... y así sucesivamente para cada opción, llamando a la función correspondiente del módulo apropiado.
        *   **`case 0:` (Salir)**: Imprime un mensaje de despedida y ejecuta `return;`. Esto termina la ejecución de la función `menuPrincipal` y, por lo tanto, rompe el ciclo `while (true)`, finalizando el programa.
    5.  **Pausa para Continuar**: Después de cada operación (excepto salir), `prompt("⏎ Presione Enter para volver al menú...");` pausa el programa, permitiendo al usuario ver el resultado antes de que el menú se vuelva a mostrar.

### 3️⃣ Ejecución Inicial

```js
menuPrincipal();
```

*   **Propósito**: Iniciar la aplicación.
*   **Detalle**: Una única llamada a `menuPrincipal()` al final del archivo es suficiente para arrancar la interfaz de usuario interactiva.

🏁 **Resumen**

Este módulo actúa como el "controlador" o "director de orquesta" de la aplicación. No contiene lógica de negocio compleja en sí mismo, pero es responsable de presentar las opciones al usuario y llamar a las funciones correctas de los otros módulos para ejecutar las tareas solicitadas. Su estructura basada en un ciclo `while` y un `switch` es un patrón común para crear aplicaciones de menú por consola.