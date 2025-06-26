const usuarios = [
    {
        id: 101,
        nombre: "Ana García",
        email: "ana.garcia@example.com",
        librosPrestados: [3, 10] // Tiene "1984" y "Crónica de una muerte anunciada"
    },
    {
        id: 102,
        nombre: "Carlos Martinez",
        email: "carlos.m@example.com",
        librosPrestados: [6] // Tiene "Matar a un ruiseñor"
    },
    {
        id: 103,
        nombre: "Lucía Rodríguez",
        email: "lucia.rodriguez@email.net",
        librosPrestados: [] // No tiene libros prestados actualmente
    },
    {
        id: 104,
        nombre: "Javier Fernández",
        email: "j.fernandez@workplace.com",
        librosPrestados: [1, 4, 9] // Es fan de la fantasía y los clásicos
    },
    {
        id: 105,
        nombre: "Sofía López",
        email: "sofialopez@email.org",
        librosPrestados: [8, 11] // Le gusta el romance y el misterio
    }
];

//exportación con CommonJS - versión por defecto de js
if (require.main === module) {
    usuarios
}

module.exports = {usuarios};