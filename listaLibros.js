const libros = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        anio: 1967,
        genero: "Realismo mágico",
        disponible: true
    },
    {
        id: 2,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        anio: 1605,
        genero: "Novela de caballerías",
        disponible: true
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949,
        genero: "Ciencia ficción distópica",
        disponible: false
    },
    {
        id: 4,
        titulo: "El Señor de los Anillos",
        autor: "J.R.R. Tolkien",
        anio: 1954,
        genero: "Fantasía épica",
        disponible: true
    },
    {
        id: 5,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        anio: 1997,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 6,
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        anio: 1960,
        genero: "Novela",
        disponible: false
    },
    {
        id: 7,
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        anio: 1925,
        genero: "Novela",
        disponible: true
    },
    {
        id: 8,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        anio: 1813,
        genero: "Romance",
        disponible: true
    },
    {
        id: 9,
        titulo: "El hobbit",
        autor: "J.R.R. Tolkien",
        anio: 1937,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 10,
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        anio: 1981,
        genero: "Novela",
        disponible: false
    },
    {
        id: 11,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        anio: 2001,
        genero: "Misterio",
        disponible: true
    }
];

//exportación con CommonJS - versión por defecto de js
if (require.main === module) {
    libros
}

module.exports = {libros};
